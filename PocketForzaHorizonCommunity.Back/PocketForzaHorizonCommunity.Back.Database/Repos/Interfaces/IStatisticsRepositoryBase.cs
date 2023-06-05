using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces
{
    public interface IStatisticsRepositoryBase<TStatistics> where TStatistics : UserStatisticsBase
    {
        Task CreateAsync(TStatistics newEntity);
        Task<int> SaveAsync();
    }
}