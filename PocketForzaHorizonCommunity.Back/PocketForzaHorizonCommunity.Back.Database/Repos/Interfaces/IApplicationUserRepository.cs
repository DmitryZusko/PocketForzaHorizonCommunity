using PocketForzaHorizonCommunity.Back.Database.Entities;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces
{
    public interface IApplicationUserRepository
    {
        Task<ApplicationUser> GetUserByIdAsync(Guid id);
    }
}