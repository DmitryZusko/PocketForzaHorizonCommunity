using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class StatisticsRepositoryBase<TStatistics> : IStatisticsRepositoryBase<TStatistics> where TStatistics : UserStatisticsBase
{
    protected readonly ApplicationDbContext _context;

    public StatisticsRepositoryBase(ApplicationDbContext context) => _context = context;

    public virtual async Task<int> SaveAsync() => await _context.SaveChangesAsync();

    public virtual async Task CreateAsync(TStatistics newEntity) => await _context.Set<TStatistics>().AddAsync(newEntity);

}
