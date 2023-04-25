using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class TunesRepository : RepositoryBase<Tune>, ITunesRepository
{
    public TunesRepository(ApplicationDbContext context) : base(context)
    {
    }
}
