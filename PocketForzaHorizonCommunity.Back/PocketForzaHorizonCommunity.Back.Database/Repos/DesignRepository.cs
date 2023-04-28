using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class DesignRepository : RepositoryBase<Design>, IDesignRepository
{
    public DesignRepository(ApplicationDbContext context) : base(context)
    {
    }

    public override IQueryable<Design> GetAll() => Context.Set<Design>().Include(d => d.User).Include(d => d.Car).AsQueryable();

    public override IQueryable<Design> GetById(Guid id)
    {
        return Context.Set<Design>()
            .Where(d => d.Id == id)
            .Include(d => d.User)
            .Include(d => d.Car)
            .Include(d => d.DesignOptions)
            .ThenInclude(o => o.Gallery)
            .AsQueryable();
    }
}
