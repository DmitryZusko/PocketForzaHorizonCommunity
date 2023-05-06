using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.RepoAdapters.Interfaces
{
    public interface IDesignRepoAdapter : IDesignRepository
    {
        IQueryable<Design> GetAllFiltered(string searchQuery);
    }
}