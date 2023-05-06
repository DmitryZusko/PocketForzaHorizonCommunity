using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.DTO.Requests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICrudServiceBase<TEntity, TGetRequest> : IServiceBase<TEntity, TGetRequest> where TEntity : EntityBase where TGetRequest : PaginationGetRequestBase
    {
        Task<TEntity> CreateAsync(TEntity entity);
    }
}