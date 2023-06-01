using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.StatisticsRepos;

public class RecordsStatisticsRepository : StatisticsRepositoryBase<RecordsStatistics>, IRecordsStatisticsRepository
{
    public RecordsStatisticsRepository(ApplicationDbContext context) : base(context) { }
}
