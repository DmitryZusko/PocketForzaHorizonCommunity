using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class ManufacturesRepository : RepositoryBase<Manufacture>, IManufactireRepository
{
    public ManufacturesRepository(ApplicationDbContext context) : base(context)
    {
    }
}
