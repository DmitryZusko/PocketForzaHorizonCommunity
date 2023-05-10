using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

public interface ITuneRepository : IRepositoryBase<Tune>
{
    IQueryable<Tune> GetAllByCarId(Guid carId);
}
