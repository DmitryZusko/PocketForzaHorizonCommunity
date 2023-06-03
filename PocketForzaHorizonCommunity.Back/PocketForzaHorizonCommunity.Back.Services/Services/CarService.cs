using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Models;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Extensions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class CarService : ServiceBase<ICarRepository, Car, FilteredCarsGetRequest>, ICarService
{
    private IImageManager _imageManager;

    public CarService(ICarRepository repository, IImageManager imageManager) : base(repository) => _imageManager = imageManager;

    public async Task<Car> CreateAsync(Car entity, IFormFile thumbnail)
    {
        await _repository.CreateAsync(entity);
        await _repository.SaveAsync();


        entity.ImagePath = await _imageManager.SaveCarThumbnail(thumbnail, entity.Id);
        await _repository.SaveAsync();

        return entity;
    }

    public async override Task<PaginationModel<Car>> GetAllAsync(FilteredCarsGetRequest request) =>
        await AplyFiltersAsync(_repository.GetAll(), request);

    public async Task<PaginationModel<Car>> GetByIds(FilteredCarsGetByIdsRequest request)
    {
        var carIds = request.Ids.Split(',').ToList();
        var cars = _repository.GetAll();

        cars = cars.Where(c => carIds.Contains(c.Id.ToString()));

        return await AplyFiltersAsync(cars, request);
    }

    public async Task<Car> UpdateAsync(Car newEntity, IFormFile thumbnail)
    {
        var oldEntity = await _repository.GetById(newEntity.Id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        oldEntity.Model = newEntity.Model;
        oldEntity.Year = newEntity.Year;
        oldEntity.Price = newEntity.Price;
        oldEntity.ImagePath = await _imageManager.SaveCarThumbnail(thumbnail, oldEntity.Id);
        oldEntity.ManufactureId = newEntity.ManufactureId;
        oldEntity.CarTypeId = newEntity.CarTypeId;
        await _repository.SaveAsync();

        return oldEntity;
    }

    public override async Task DeleteAsync(Guid id)
    {
        var entity = await _repository.GetById(id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        _imageManager.DeleteCarThumbnail(entity.ImagePath);

        _repository.Delete(entity);
        await _repository.SaveAsync();
    }

    public async Task<CarFilterScheme> GetCarFilterMarginsAsync()
    {
        return new CarFilterScheme
        {
            MinPrice = await _repository.GetMinPriceAsync(),
            MaxPrice = await _repository.GetMaxPriceAsync(),
            MinYear = await _repository.GetMinYearAsync(),
            MaxYear = await _repository.GetMaxYearAsync(),
        };
    }

    private async Task<PaginationModel<Car>> AplyFiltersAsync(IQueryable<Car> query, FilteredCarsGetRequest request)
    {

        var countries = request.SelectedCountries?.Split(',').ToList();
        var manufactures = request.SelectedManufactures?.Split(",").ToList();
        var carTypes = request.SelectedCarTypes?.Split(",").ToList();

        query = query.Where(c => c.Price >= request.MinPrice && c.Price <= request.MaxPrice);
        query = query.Where(c => c.Year >= request.MinYear && c.Year <= request.MaxYear);

        if (manufactures?.Count > 0) query = query.Where(c => manufactures.Contains(c.Manufacture.Name));
        if (countries?.Count > 0) query = query.Where(c => countries.Contains(c.Manufacture.Country));
        if (carTypes?.Count > 0) query = query.Where(c => carTypes.Contains(c.CarType.Name));

        return await query.PaginateAsync(request.Page, request.PageSize);
    }
}
