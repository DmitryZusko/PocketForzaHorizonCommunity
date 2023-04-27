using PocketForzaHorizonCommunity.Back.Database.Entities;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities
{
    public interface IStatisticsGenerator
    {
        void GenerateStatistics(ApplicationUser user);
    }
}