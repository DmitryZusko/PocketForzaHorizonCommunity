using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class TuneService : ServiceBase<ITuneRepository, Tune>, ITuneService
{
    public TuneService(ITuneRepository repository) : base(repository)
    {
    }
}
