using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.DTO.Requests.GetRequests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface IServiceBase<TEntity, TGetRequest> where TEntity : EntityBase where TGetRequest : PaginationGetRequest
    {
        Task DeleteAsync(Guid id);
        Task<PaginationModel<TEntity>> GetAllAsync(TGetRequest request);
        Task<TEntity> GetByIdAsync(Guid Id);
    }
}