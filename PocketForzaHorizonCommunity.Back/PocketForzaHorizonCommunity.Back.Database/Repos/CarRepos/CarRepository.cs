using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.CarRepos;
public class CarRepository : RepositoryBase<Car>, ICarRepository
{
    public CarRepository(ApplicationDbContext context) : base(context)
    {
    }

    public override IQueryable<Car> GetAll() =>
        _context.Set<Car>()
            .Include(c => c.Manufacture)
            .Include(c => c.CarType)
            .AsQueryable();

    public Task<int> GetMinPriceAsync() => _context.Set<Car>().MinAsync(c => c.Price);

    public Task<int> GetMaxPriceAsync() => _context.Set<Car>().MaxAsync(c => c.Price);

    public Task<int> GetMinYearAsync() => _context.Set<Car>().MinAsync(c => c.Year);

    public Task<int> GetMaxYearAsync() => _context.Set<Car>().MaxAsync(c => c.Year);

}
