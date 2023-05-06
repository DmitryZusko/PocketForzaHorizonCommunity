using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.RepoDecorators
{
    public interface ICarRepoAdapter : ICarRepository
    {
        IQueryable<Car> GetAllFiltered(int minPrice, int maxPrice, int minYear, int maxYear, string selectedManufactures, string selectedCarTypes, string selectedCountries);
    }
}