using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class CampaignStatisticsRepository : StatisticsRepositoryBase<CampaignStatistics>, ICampaignStatisticsRepository
{
    public CampaignStatisticsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
