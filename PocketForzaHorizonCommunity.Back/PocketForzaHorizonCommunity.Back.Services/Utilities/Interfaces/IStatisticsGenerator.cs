using PocketForzaHorizonCommunity.Back.Database.Entities;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces
{
    public interface IStatisticsGenerator
    {
        Task GenerateStatistics(ApplicationUser user);
    }
}