using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class GeneralStatisticsRepository : StatisticsRepositoryBase<GeneralStatistics>, IGeneralStatisticsRepository
{
    public GeneralStatisticsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
