using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class ManufacturesRepository : RepositoryBase<Manufacture>
{
    public ManufacturesRepository(ApplicationDbContext context) : base(context)
    {
    }
}
