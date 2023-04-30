using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class CarRepository : RepositoryBase<Car>, ICarRepository
{
    public CarRepository(ApplicationDbContext context) : base(context)
    {
    }

    public IQueryable<Car> GetByIdWithTunes(Guid id) =>
        Context.Set<Car>().Where(c => c.Id == id).Include(c => c.Tunes).AsQueryable();

    public IQueryable<Car> GetByIdWithDesigns(Guid id) =>
        Context.Set<Car>().Where(c => c.Id == id).Include(c => c.Designs).AsQueryable();
}
