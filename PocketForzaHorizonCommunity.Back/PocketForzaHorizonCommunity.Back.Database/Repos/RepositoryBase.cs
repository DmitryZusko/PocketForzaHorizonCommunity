using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public abstract class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : EntityBase
{
    protected ApplicationDbContext _context { get; }

    public RepositoryBase(ApplicationDbContext context) => _context = context;

    public async Task<int> SaveAsync() => await _context.SaveChangesAsync();

    public virtual IQueryable<TEntity> GetAll() => _context.Set<TEntity>().AsQueryable<TEntity>();

    public virtual IQueryable<TEntity> GetById(Guid id) => GetAll().Where(i => i.Id == id);

    public async virtual Task CreateAsync(TEntity newEntity) => await _context.Set<TEntity>().AddAsync(newEntity);

    public virtual void Delete(TEntity entity) => _context.Set<TEntity>().Remove(entity);

    public virtual IQueryable<Guid> GetAllIds() => _context.Set<TEntity>().Select(x => x.Id);
}
