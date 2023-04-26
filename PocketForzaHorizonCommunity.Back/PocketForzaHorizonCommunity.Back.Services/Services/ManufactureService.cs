using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class ManufactureService : ServiceBase<IManufactireRepository, Manufacture>
{
    public ManufactureService(IManufactireRepository repository) : base(repository)
    {
    }
}
