using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class TuneService : ServiceBase<ITunesRepository, Tune>
{
    public TuneService(ITunesRepository repository) : base(repository)
    {
    }
}
