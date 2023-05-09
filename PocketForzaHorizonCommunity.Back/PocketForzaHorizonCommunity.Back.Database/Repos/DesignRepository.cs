using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class DesignRepository : RepositoryBase<Design>, IDesignRepository
{
    public DesignRepository(ApplicationDbContext context) : base(context)
    {
    }

    public override IQueryable<Design> GetAll() =>
        Context.Set<Design>()
        .Include(d => d.User)
        .Include(d => d.Car.Manufacture)
        .Include(d => d.DesignOptions)
        .AsQueryable();

    public override IQueryable<Design> GetById(Guid id) =>
        Context.Set<Design>()
            .Where(d => d.Id == id)
            .Include(d => d.User)
            .Include(d => d.Car.Manufacture)
            .Include(d => d.DesignOptions.Gallery)
            .AsQueryable();

    public IQueryable<Design> GetAllByCarId(Guid carId) =>
        Context.Set<Design>()
        .Where(d => d.CarId == carId)
        .Include(d => d.User)
        .Include(d => d.Car.Manufacture)
        .Include(d => d.DesignOptions.Gallery)
        .AsQueryable();

}
