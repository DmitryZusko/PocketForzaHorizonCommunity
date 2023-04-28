using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICrudServiceBase<TEntity> where TEntity : EntityBase
    {
        Task<TEntity> CreateAsync(TEntity entity);
        Task DeleteAsync(Guid id);
        Task<PaginationModel<TEntity>> GetAllAsync(int page, int pageSize);
        Task<TEntity> GetByIdAsync(Guid Id);
    }
}