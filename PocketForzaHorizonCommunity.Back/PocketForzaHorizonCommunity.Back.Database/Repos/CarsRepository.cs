using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class CarsRepository : RepositoryBase<Car>, ICarsRepository
{
    public CarsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
