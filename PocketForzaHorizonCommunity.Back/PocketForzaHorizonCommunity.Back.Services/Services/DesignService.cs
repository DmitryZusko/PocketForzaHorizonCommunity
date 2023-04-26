using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class DesignService : ServiceBase<IDesignsRepository, Design>
{
    public DesignService(IDesignsRepository repository) : base(repository)
    {
    }
}
