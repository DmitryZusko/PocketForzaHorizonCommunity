using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class TuneService : CrudServiceBase<ITuneRepository, Tune, PaginationGetRequestBase>, ITuneService
{
    public TuneService(ITuneRepository repository) : base(repository)
    {
    }

    public async Task<List<Tune>> GetLastTunes(int tunesAmount) => await _repository.GetAll().OrderByDescending(t => t.CreationDate).Take(tunesAmount).ToListAsync();
}
