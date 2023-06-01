using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.Database.Models;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Extensions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class TuneService : CrudServiceBase<ITuneRepository, Tune, FilteredTuneGetRequest>, ITuneService
{
    private readonly ITuneRatingRepository _ratingRepository;

    public TuneService(ITuneRepository repository, ITuneRatingRepository ratingRepository) : base(repository)
    {
        _ratingRepository = ratingRepository;
    }

    public override async Task<PaginationModel<Tune>> GetAllAsync(FilteredTuneGetRequest request) =>
        await ApplyFiltersAsync(_repository.GetAll(), request);

    public async Task<PaginationModel<Tune>> GetAllByCarIdAsync(FilteredCarTuneGetRequest request)
    {
        if (!Guid.TryParse(request.CarId, out var carId)) throw new EntityNotFoundException();

        return await ApplyFiltersAsync(_repository.GetAllByCarId(carId), request);
    }

    public async Task<List<Tune>> GetLastTunes(int tunesAmount) =>
        await _repository.GetAll().OrderByDescending(t => t.CreationDate).Take(tunesAmount).ToListAsync();

    public async Task<Tune> SetRating(TuneRating request)
    {
        var tune = _repository.GetById(request.EntityId).FirstOrDefault() ?? throw new BadRequestException(Messages.BAD_REQUEST);
        var rating = await _ratingRepository.GetByKey(request.UserId, request.EntityId);

        if (rating != null)
        {
            rating.Rating = request.Rating;
            await _ratingRepository.SaveAsync();

            return tune;
        }

        rating = request;

        await _ratingRepository.CreateAsync(rating);
        await _ratingRepository.SaveAsync();

        return tune;
    }

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
