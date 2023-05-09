using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

public interface ICarRepository : IRepositoryBase<Car>
{
    Task<int> GetMinPriceAsync();

    Task<int> GetMaxPriceAsync();

    Task<int> GetMinYearAsync();

    Task<int> GetMaxYearAsync();
}
