using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class CarsRepository : RepositoryBase<Car>
{
    public CarsRepository(ApplicationDbContext context) : base(context)
    {
    }
}
