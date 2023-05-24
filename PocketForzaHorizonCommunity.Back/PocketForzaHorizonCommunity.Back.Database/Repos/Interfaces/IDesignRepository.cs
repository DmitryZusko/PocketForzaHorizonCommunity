using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

public interface IDesignRepository : IRepositoryBase<Design>
{
    IQueryable<Design> GetAllByCarId(Guid carId);

}
