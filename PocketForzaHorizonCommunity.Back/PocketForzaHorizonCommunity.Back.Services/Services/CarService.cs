using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.Cars;
using PocketForzaHorizonCommunity.Back.Database.RepoAdapters.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Extensions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class CarService : ServiceBase<ICarRepoAdapter, Car, FilteredCarsGetRequest>, ICarService
{
    private IImageManager _imageManager;

    public CarService(ICarRepoAdapter repository, IImageManager imageManager) : base(repository) => _imageManager = imageManager;

    public async Task<Car> CreateAsync(Car entity, IFormFile thumbnail)
    {
        await _repository.CreateAsync(entity);
        await _repository.SaveAsync();


        entity.ImagePath = await _imageManager.SaveCarThumbnail(thumbnail, entity.Id);
        await _repository.SaveAsync();

        return entity;
    }

    public async override Task<PaginationModel<Car>> GetAllAsync(FilteredCarsGetRequest request) =>
        await _repository
        .GetAllFiltered(request.MinPrice, request.MaxPrice, request.MinYear, request.MaxYear,
            request.SelectedManufactures, request.SelectedCarTypes, request.SelectedCountries)
        .PaginateAsync(request.Page, request.PageSize);

    public async Task<PaginationModel<Car>> GetDesignsByIdAsync(Guid id, int page, int pageSize) =>
        await _repository.GetByIdWithTunes(id).PaginateAsync(page, pageSize) ?? throw new EntityNotFoundException();

    public async Task<PaginationModel<Car>> GetTunesByIdAsync(Guid Id, int page, int pageSize) =>
        await _repository.GetByIdWithDesigns(Id).PaginateAsync(page, pageSize) ?? throw new EntityNotFoundException();

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
}
