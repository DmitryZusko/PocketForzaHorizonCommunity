using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class CarTypesRepository : RepositoryBase<CarType>, ICarTypesRepository
{
    public CarTypesRepository(ApplicationDbContext context) : base(context)
    {
    }
}
