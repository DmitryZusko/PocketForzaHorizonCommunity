using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

public interface IDesignRepository : IRepositoryBase<Design>
{
    IQueryable<Design> GetAllByCarId(Guid carId);
}
