using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class TuneRepository : RepositoryBase<Tune>, ITuneRepository
{
    public TuneRepository(ApplicationDbContext context) : base(context)
    {
    }

    public override IQueryable<Tune> GetAll() => Context.Set<Tune>().Include(t => t.User).Include(t => t.Car).AsQueryable();

    public override IQueryable<Tune> GetById(Guid id)
    {
        return Context.Set<Tune>()
            .Where(t => t.Id == id)
            .Include(t => t.Car)
            .Include(t => t.User)
            .Include(t => t.TuneOptions)
            .AsQueryable();
    }
}
