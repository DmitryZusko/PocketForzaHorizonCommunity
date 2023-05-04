using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

public interface ITuneService : ICrudServiceBase<Tune>
{
    Task<List<Tune>> GetLastTunes(int tunesAmount);
}
