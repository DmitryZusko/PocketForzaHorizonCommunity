using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces
{
    public interface IRatingRepositoryBase<TEntity, TGuide>
        where TEntity : RatingBase<TGuide> where TGuide : class
    {
        Task CreateAsync(TEntity newEntity);
        Task<TEntity> GetByKey(Guid userId, Guid entityId);
        Task<int> SaveAsync();
    }
}