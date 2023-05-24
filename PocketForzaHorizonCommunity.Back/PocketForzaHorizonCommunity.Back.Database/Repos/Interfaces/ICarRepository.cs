namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;


public interface ICarRepository : IRepositoryBase<Car>
{
    Task<int> GetMinPriceAsync();

    Task<int> GetMaxPriceAsync();

    Task<int> GetMinYearAsync();

    Task<int> GetMaxYearAsync();
}
