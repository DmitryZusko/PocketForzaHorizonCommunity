using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.StatisticsRepos;

public class CampaignStatisticsRepository : StatisticsRepositoryBase<CampaignStatistics>, ICampaignStatisticsRepository
{
    public CampaignStatisticsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
