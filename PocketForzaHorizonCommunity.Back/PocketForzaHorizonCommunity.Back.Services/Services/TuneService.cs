using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;
using PocketForzaHorizonCommunity.Back.Services.Extensions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class TuneService : CrudServiceBase<ITuneRepository, Tune, FilteredTuneGetRequest>, ITuneService
{
    public TuneService(ITuneRepository repository) : base(repository)
    {
    }

    public override async Task<PaginationModel<Tune>> GetAllAsync(FilteredTuneGetRequest request) =>
        await ApplyFiltersAsync(_repository.GetAll(), request);

    public async Task<PaginationModel<Tune>> GetAllByCarIdAsync(FilteredCarTuneGetRequest request) =>
        await ApplyFiltersAsync(_repository.GetAllByCarId(request.CarId), request);

    public async Task<List<Tune>> GetLastTunes(int tunesAmount) =>
        await _repository.GetAll().OrderByDescending(t => t.CreationDate).Take(tunesAmount).ToListAsync();

    private async Task<PaginationModel<Tune>> ApplyFiltersAsync(IQueryable<Tune> query, FilteredTuneGetRequest request)
    {
        var lowerSearch = request.SearchQuery.ToLower();

        query = query.Where(
            x => x.User.UserName.ToLower().Contains(lowerSearch)
            || x.Title.ToLower().Contains(lowerSearch)
            || x.TuneOptions.EngineDescription.ToLower().Contains(lowerSearch)
            || x.TuneOptions.HandlingDescription.ToLower().Contains(lowerSearch)
            || x.TuneOptions.DrivetrainDescription.ToLower().Contains(lowerSearch)
            || x.TuneOptions.TiresDescription.ToLower().Contains(lowerSearch)
            );

        return await query.PaginateAsync(request.Page, request.PageSize);
    }
}
