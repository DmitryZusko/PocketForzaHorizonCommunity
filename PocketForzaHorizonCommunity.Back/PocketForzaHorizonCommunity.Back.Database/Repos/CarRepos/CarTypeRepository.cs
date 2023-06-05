using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.CarRepos;

public class CarTypeRepository : RepositoryBase<CarType>, ICarTypeRepository
{
    public CarTypeRepository(ApplicationDbContext context) : base(context) { }
}
