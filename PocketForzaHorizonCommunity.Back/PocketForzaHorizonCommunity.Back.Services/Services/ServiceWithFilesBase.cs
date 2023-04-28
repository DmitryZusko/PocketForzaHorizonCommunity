using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Extensions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public abstract class ServiceWithFilesBase<TRepo, TEntity> : IServiceWithFilesBase<TEntity> where TEntity : EntityBase where TRepo : IRepositoryBase<TEntity>
{
    protected readonly IConfiguration _configuration;
    protected readonly TRepo _repository;
    public ServiceWithFilesBase(TRepo repository, IConfiguration config)
    {
        _repository = repository;
        _configuration = config;
    }

    public virtual async Task<PaginationModel<TEntity>> GetAllAsync(int page, int pageSize)
    {
        return await _repository.GetAll().PaginateAsync(page, pageSize);
    }

    public virtual async Task<TEntity> GetById(Guid id)
    {
        return await _repository.GetById(id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();
    }

    public abstract Task<TEntity> CreateAsync(TEntity entity, IFormFile thumbnail);

    public abstract Task Delete(Guid id);
}
