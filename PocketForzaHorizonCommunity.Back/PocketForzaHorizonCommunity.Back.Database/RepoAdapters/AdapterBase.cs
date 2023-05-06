using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos;

namespace PocketForzaHorizonCommunity.Back.Database.RepoAdapters;

public abstract class AdapterBase<TEntity> : RepositoryBase<TEntity> where TEntity : EntityBase
{
    public AdapterBase(ApplicationDbContext context) : base(context)
    {
    }
}
