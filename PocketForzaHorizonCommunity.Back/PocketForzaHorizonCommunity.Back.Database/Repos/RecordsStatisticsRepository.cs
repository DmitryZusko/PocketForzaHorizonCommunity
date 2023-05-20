using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class RecordsStatisticsRepository : StatisticsRepositoryBase<RecordsStatistics>, IRecordsStatisticsRepository
{
    public RecordsStatisticsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
