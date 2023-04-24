using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class DesignsRepository : RepositoryBase<Design>
{
    public DesignsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
