using PocketForzaHorizonCommunity.Back.Database.Entities;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces
{
    public interface IStatisticsGenerator
    {
        public void GenerateStatistics(ApplicationUser user);
    }
}