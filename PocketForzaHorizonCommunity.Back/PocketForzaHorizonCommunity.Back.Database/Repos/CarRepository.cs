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

    public IQueryable<Car> GetByIdWithTunes(Guid id) =>
        Context.Set<Car>()
        .Where(c => c.Id == id)
        .Include(c => c.Tunes)
        .AsQueryable();

    public IQueryable<Car> GetByIdWithDesigns(Guid id) =>
        Context.Set<Car>()
        .Where(c => c.Id == id)
        .Include(c => c.Designs)
        .AsQueryable();
}
