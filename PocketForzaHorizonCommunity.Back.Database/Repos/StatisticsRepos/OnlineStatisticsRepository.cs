using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.StatisticsRepos;

public class OnlineStatisticsRepository : StatisticsRepositoryBase<OnlineStatistics>, IOnlineStatisticsRepository
{
    public OnlineStatisticsRepository(ApplicationDbContext context) : base(context) { }
}
