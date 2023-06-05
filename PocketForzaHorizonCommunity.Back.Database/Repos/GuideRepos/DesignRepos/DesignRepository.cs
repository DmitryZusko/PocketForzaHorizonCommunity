using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.GuideRepos.TuneRepos;

public class DesignRepository : RepositoryBase<Design>, IDesignRepository
{
    public DesignRepository(ApplicationDbContext context) : base(context) { }

    public override IQueryable<Design> GetAll() =>
        _context.Set<Design>()
            .Include(d => d.User)
            .Include(d => d.Car.Manufacture)
            .Include(d => d.DesignOptions)
            .Include(d => d.Ratings)
            .AsQueryable();

    public override IQueryable<Design> GetById(Guid id) =>
        _context.Set<Design>()
            .Where(d => d.Id == id)
            .Include(d => d.User)
            .Include(d => d.Car.Manufacture)
            .Include(d => d.DesignOptions.Gallery)
            .Include(d => d.Ratings)
            .AsQueryable();

    public IQueryable<Design> GetAllByCarId(Guid carId) =>
        _context.Set<Design>()
            .Where(d => d.CarId == carId)
            .Include(d => d.User)
            .Include(d => d.Car.Manufacture)
            .Include(d => d.DesignOptions.Gallery)
            .Include(d => d.Ratings)
            .AsQueryable();

}
