using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.CarRepos;

public class ManufactureRepository : RepositoryBase<Manufacture>, IManufactureRepository
{
    public ManufactureRepository(ApplicationDbContext context) : base(context)
    {
    }
}
