using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class CarTypesRepository : RepositoryBase<CarType>
{
    public CarTypesRepository(ApplicationDbContext context) : base(context)
    {
    }
}
