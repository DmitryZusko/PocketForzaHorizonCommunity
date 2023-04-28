using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Extensions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public abstract class CrudServiceBase<TRepo, TEntity> : ICrudServiceBase<TEntity> where TEntity : EntityBase where TRepo : IRepositoryBase<TEntity>
{
    protected TRepo _repository;
    public CrudServiceBase(TRepo repository)
    {
        _repository = repository;
    }

    public virtual async Task<PaginationModel<TEntity>> GetAllAsync(int page, int pageSize)
    {
        return await _repository.GetAll().PaginateAsync(page, pageSize);
    }

    public virtual async Task<TEntity> GetByIdAsync(Guid Id)
    {
        return await _repository.GetById(Id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();
    }

    public virtual async Task<TEntity> CreateAsync(TEntity entity)
    {
        await _repository.CreateAsync(entity);
        await _repository.SaveAsync();

        return entity;
    }

    public virtual async Task DeleteAsync(Guid id)
    {
        var entity = await _repository.GetById(id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        _repository.Delete(entity);
        await _repository.SaveAsync();
    }
}
