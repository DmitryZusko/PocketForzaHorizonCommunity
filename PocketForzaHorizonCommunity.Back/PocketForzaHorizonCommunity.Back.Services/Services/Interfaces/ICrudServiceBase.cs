using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.DTO.Requests.GetRequests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICrudServiceBase<TEntity, TGetRequest> : IServiceBase<TEntity, TGetRequest> where TEntity : EntityBase where TGetRequest : PaginationGetRequest
    {
        Task<TEntity> CreateAsync(TEntity entity);
    }
}