using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class TunesRepository : RepositoryBase<Tune>
{
    public TunesRepository(ApplicationDbContext context) : base(context)
    {
    }
}
