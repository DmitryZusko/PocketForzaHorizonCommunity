using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class TuneService : ServiceBase<ITuneRepository, Tune>
{
    public TuneService(ITuneRepository repository) : base(repository)
    {
    }
}
