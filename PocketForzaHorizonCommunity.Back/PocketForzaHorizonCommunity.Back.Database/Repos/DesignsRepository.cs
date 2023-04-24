using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class DesignsRepository : RepositoryBase<Design>, IDesignsRepository
{
    public DesignsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
