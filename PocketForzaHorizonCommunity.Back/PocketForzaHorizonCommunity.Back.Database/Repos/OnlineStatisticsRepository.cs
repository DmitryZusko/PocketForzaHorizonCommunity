using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class OnlineStatisticsRepository : StatisticsRepositoryBase<OnlineStatistics>, IOnlineStatisticsRepository
{
    public OnlineStatisticsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
