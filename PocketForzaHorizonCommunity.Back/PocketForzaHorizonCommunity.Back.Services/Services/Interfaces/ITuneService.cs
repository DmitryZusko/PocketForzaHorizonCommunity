using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

public interface ITuneService : ICrudServiceBase<Tune, FilteredTuneGetRequest>
{
    Task<PaginationModel<Tune>> GetAllByCarIdAsync(FilteredCarTuneGetRequest request);
    Task<List<Tune>> GetLastTunes(int tunesAmount);
    Task<Tune> SetRating(TuneRating request);
}
