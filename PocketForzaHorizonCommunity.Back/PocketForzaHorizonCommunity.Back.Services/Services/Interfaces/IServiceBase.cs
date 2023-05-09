using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.DTO.Requests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface IServiceBase<TEntity, TGetRequest> where TEntity : EntityBase where TGetRequest : PaginationGetRequestBase
    {
        Task DeleteAsync(Guid id);
        Task<PaginationModel<TEntity>> GetAllAsync(TGetRequest request);
        Task<TEntity> GetByIdAsync(Guid Id);
    }
}