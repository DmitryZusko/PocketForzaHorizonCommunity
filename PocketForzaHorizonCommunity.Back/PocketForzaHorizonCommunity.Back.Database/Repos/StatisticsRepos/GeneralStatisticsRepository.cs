using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.StatisticsRepos;

public class GeneralStatisticsRepository : StatisticsRepositoryBase<GeneralStatistics>, IGeneralStatisticsRepository
{
    public GeneralStatisticsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
