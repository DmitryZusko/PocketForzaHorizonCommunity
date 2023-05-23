using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class CarRepository : RepositoryBase<Car>, ICarRepository
{
    public CarRepository(ApplicationDbContext context) : base(context)
    {
    }

    public override IQueryable<Car> GetAll() =>
        Context.Set<Car>()
        .Include(c => c.Manufacture)
        .Include(c => c.CarType)
        .AsQueryable();

    public Task<int> GetMinPriceAsync() => Context.Set<Car>().MinAsync(c => c.Price);

    public Task<int> GetMaxPriceAsync() => Context.Set<Car>().MaxAsync(c => c.Price);

    public Task<int> GetMinYearAsync() => Context.Set<Car>().MinAsync(c => c.Year);

    public Task<int> GetMaxYearAsync() => Context.Set<Car>().MaxAsync(c => c.Year);

}
