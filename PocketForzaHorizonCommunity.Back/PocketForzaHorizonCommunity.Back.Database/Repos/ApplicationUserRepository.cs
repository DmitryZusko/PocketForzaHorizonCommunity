using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos;

public class ApplicationUserRepository : IApplicationUserRepository
{
    protected readonly ApplicationDbContext _context;
    public ApplicationUserRepository(ApplicationDbContext context) => _context = context;

    public async Task<ApplicationUser> GetUserByIdAsync(Guid id)
        => await _context.Set<ApplicationUser>()
        .Include(u => u.CampaignStatistics)
        .Include(u => u.GeneralStatistics.Car.Manufacture)
        .Include(u => u.GeneralStatistics.Car.CarType)
        .Include(u => u.OnlineStatistics)
        .Include(u => u.RecordsStatistics)
        .Include(u => u.OwnedCarsByUsers)
        .AsSplitQuery()
        .FirstOrDefaultAsync(u => u.Id == id);
}
