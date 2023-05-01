using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public abstract class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : EntityBase
{
    protected ApplicationDbContext Context { get; }

    public RepositoryBase(ApplicationDbContext context) => Context = context;

    public async Task<int> SaveAsync() => await Context.SaveChangesAsync();

    public virtual IQueryable<TEntity> GetAll() => Context.Set<TEntity>().AsQueryable<TEntity>();

    public virtual IQueryable<TEntity> GetById(Guid id) => GetAll().Where(i => i.Id == id);

    public async virtual Task CreateAsync(TEntity newEntity) => await Context.Set<TEntity>().AddAsync(newEntity);

    public virtual void Delete(TEntity entity) => Context.Set<TEntity>().Remove(entity);
}
