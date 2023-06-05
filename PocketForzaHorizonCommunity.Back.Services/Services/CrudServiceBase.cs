using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class CrudServiceBase<TRepo, TEntity, TGetRequest> : ServiceBase<TRepo, TEntity, TGetRequest>, ICrudServiceBase<TEntity, TGetRequest> where TEntity : EntityBase where TRepo : IRepositoryBase<TEntity> where TGetRequest : PaginationGetRequestBase
{
    public CrudServiceBase(TRepo repository) : base(repository)
    {
    }

    public virtual async Task<TEntity> CreateAsync(TEntity entity)
    {
        await _repository.CreateAsync(entity);
        await _repository.SaveAsync();

        return entity;
    }
}
