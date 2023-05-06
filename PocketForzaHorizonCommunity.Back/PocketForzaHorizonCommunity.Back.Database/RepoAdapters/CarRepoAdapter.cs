using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos;

namespace PocketForzaHorizonCommunity.Back.Database.RepoDecorators;

public class CarRepoAdapter : CarRepository, ICarRepoAdapter
{
    public CarRepoAdapter(ApplicationDbContext context) : base(context) { }

    public IQueryable<Car> GetAllFiltered(int minPrice, int maxPrice, int minYear, int maxYear,
        string selectedManufactures, string selectedCarTypes, string selectedCountries)
    {
        var query = GetAll();

        var countries = selectedCountries?.Split(',').ToList();
        var manufactures = selectedManufactures?.Split(",").ToList();
        var carTypes = selectedCarTypes?.Split(",").ToList();

        query = query.Where(c => c.Price >= minPrice && c.Price <= maxPrice);
        query = query.Where(c => c.Year >= minYear && c.Year <= maxYear);

        if (manufactures?.Count > 0) query = query.Where(c => manufactures.Contains(c.Manufacture.Name));
        if (countries?.Count > 0) query = query.Where(c => countries.Contains(c.Manufacture.Country));
        if (carTypes?.Count > 0) query = query.Where(c => carTypes.Contains(c.CarType.Name));

        return query;
    }
}
