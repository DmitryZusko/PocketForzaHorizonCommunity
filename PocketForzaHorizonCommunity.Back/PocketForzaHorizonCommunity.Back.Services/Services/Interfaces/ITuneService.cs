using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.DTO.Requests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

public interface ITuneService : ICrudServiceBase<Tune, PaginationGetRequestBase>
{
    Task<List<Tune>> GetLastTunes(int tunesAmount);
}
