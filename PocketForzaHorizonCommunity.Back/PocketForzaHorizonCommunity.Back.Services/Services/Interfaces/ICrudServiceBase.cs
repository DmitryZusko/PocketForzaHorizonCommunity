using PocketForzaHorizonCommunity.Back.Database.Entities;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICrudServiceBase<TEntity> : IServiceBase<TEntity> where TEntity : EntityBase
    {
        Task<TEntity> CreateAsync(TEntity entity);
    }
}