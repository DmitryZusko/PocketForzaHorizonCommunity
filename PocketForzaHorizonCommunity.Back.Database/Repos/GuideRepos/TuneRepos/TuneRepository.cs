using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.GuideRepos.TuneRepos;

public class TuneRepository : RepositoryBase<Tune>, ITuneRepository
{
    public TuneRepository(ApplicationDbContext context) : base(context) { }

    public override IQueryable<Tune> GetAll() =>
        _context.Set<Tune>()
            .Include(t => t.User)
            .Include(t => t.Car.Manufacture)
            .Include(t => t.TuneOptions)
            .Include(t => t.Ratings)
            .AsQueryable();

    public override IQueryable<Tune> GetById(Guid id) =>
        _context.Set<Tune>()
            .Where(t => t.Id == id)
            .Include(t => t.Car.Manufacture)
            .Include(t => t.User)
            .Include(t => t.TuneOptions)
            .Include(t => t.Ratings)
            .AsQueryable();

    public IQueryable<Tune> GetAllByCarId(Guid carId) =>
        _context.Set<Tune>()
            .Where(t => t.CarId == carId)
            .Include(t => t.User)
            .Include(t => t.Car.Manufacture)
            .Include(t => t.TuneOptions)
            .Include(t => t.Ratings)
            .AsQueryable();

}
