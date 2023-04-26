using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class CarTypeService : ServiceBase<ICarTypesRepository, CarType>
{
    public CarTypeService(ICarTypesRepository repository) : base(repository)
    {
    }
}
