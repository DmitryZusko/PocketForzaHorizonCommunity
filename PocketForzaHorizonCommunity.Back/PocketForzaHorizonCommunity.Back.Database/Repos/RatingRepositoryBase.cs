using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class RatingRepositoryBase<TEntity, TGuide> : IRatingRepositoryBase<TEntity, TGuide> where TEntity : RatingBase<TGuide> where TGuide : class
{
    protected readonly ApplicationDbContext _context;

    public RatingRepositoryBase(ApplicationDbContext context)
    {
        _context = context;
    }

    public async virtual Task CreateAsync(TEntity newEntity) => await _context.Set<TEntity>().AddAsync(newEntity);

    public async Task<int> SaveAsync() => await _context.SaveChangesAsync();

    public async Task<TEntity> GetByKey(Guid userId, Guid entityId)
        => await _context.Set<TEntity>().FirstOrDefaultAsync(r => r.UserId == userId && r.EntityId == entityId);

}
