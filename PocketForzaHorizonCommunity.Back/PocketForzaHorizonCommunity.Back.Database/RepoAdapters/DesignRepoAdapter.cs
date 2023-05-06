using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.RepoAdapters.Interfaces;
using PocketForzaHorizonCommunity.Back.Database.Repos;

namespace PocketForzaHorizonCommunity.Back.Database.RepoAdapters;

public class DesignRepoAdapter : DesignRepository, IDesignRepoAdapter
{
    public DesignRepoAdapter(ApplicationDbContext context) : base(context)
    {
    }

    public IQueryable<Design> GetAllFiltered(string searchQuery)
    {
        var query = GetAll();

        var lowerSearch = searchQuery.ToLower();

        query = query.Where(
            x => x.Title.ToLower().Contains(lowerSearch)
            || x.User.UserName.ToLower().Contains(lowerSearch)
            || x.DesignOptions.Description.ToLower().Contains(lowerSearch));

        return query;
    }
}
