using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Extensions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class CarService : ServiceBase<ICarRepository, Car>, ICarService
{
    private IConfiguration _configuration;
    public CarService(ICarRepository repository, IConfiguration config) : base(repository)
    {
        _configuration = config;
    }

    public async Task<Car> CreateAsync(Car entity, IFormFile thumbnail)
    {
        await _repository.CreateAsync(entity);
        await _repository.SaveAsync();

        var path = Path.Combine(_configuration["Images:Cars"], entity.Id.ToString());

        using (var stream = new FileStream(path, FileMode.Create))
        {
            await thumbnail.CopyToAsync(stream);
        }

        entity.ImagePath = path;
        await _repository.SaveAsync();

        return entity;
    }

    public async Task<PaginationModel<Car>> GetDesignsByIdAsync(Guid id, int page, int pageSize)
    {
        return await _repository.GetByIdWithTunes(id).PaginateAsync(page, pageSize) ?? throw new EntityNotFoundException();
    }

    public async Task<PaginationModel<Car>> GetTunesByIdAsync(Guid Id, int page, int pageSize)
    {
        return await _repository.GetByIdWithDesigns(Id).PaginateAsync(page, pageSize) ?? throw new EntityNotFoundException();
    }

    public async Task<Car> UpdateAsync(Car newEntity, IFormFile thumbnail)
    {
        var oldEntity = await _repository.GetById(newEntity.Id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        string path = Path.Combine(_configuration["Images:Cars"], oldEntity.Id.ToString());
        using (var stream = new FileStream(path, FileMode.Create))
        {
            await thumbnail.CopyToAsync(stream);
        }

        oldEntity.Model = newEntity.Model;
        oldEntity.Year = newEntity.Year;
        oldEntity.Price = newEntity.Price;
        oldEntity.ImagePath = path;
        oldEntity.ManufactureId = newEntity.ManufactureId;
        oldEntity.CarTypeId = newEntity.CarTypeId;
        await _repository.SaveAsync();

        return oldEntity;
    }

    public override async Task DeleteAsync(Guid id)
    {
        var entity = await _repository.GetById(id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        File.Delete(entity.ImagePath);

        _repository.Delete(entity);
        await _repository.SaveAsync();
    }
}
