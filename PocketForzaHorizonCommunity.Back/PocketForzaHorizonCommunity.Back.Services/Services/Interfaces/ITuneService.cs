using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.DTO.Requests.GetRequests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

public interface ITuneService : ICrudServiceBase<Tune, PaginationGetRequest>
{
    Task<List<Tune>> GetLastTunes(int tunesAmount);
}
