using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

public interface ITuneRepository : IRepositoryBase<Tune>
{
    IQueryable<Tune> GetAllByCarId(Guid carId);
}
