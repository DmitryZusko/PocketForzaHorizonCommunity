using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Models;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Extensions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class DesignService : ServiceBase<IDesignRepository, Design, FilteredDesignsGetRequest>, IDesignService
{
    private readonly IGalleryRepository _galleryRepository;
    private readonly IDesignRatingRepository _ratingRepository;
    private readonly IImageManager _imageManager;
    public DesignService(IDesignRepository repository, IDesignRatingRepository ratingRepository, IImageManager imageManager, IGalleryRepository galleryRepository) : base(repository)
    {
        _ratingRepository = ratingRepository;
        _galleryRepository = galleryRepository;
        _imageManager = imageManager;
    }

    public override async Task<PaginationModel<Design>> GetAllAsync(FilteredDesignsGetRequest request)
        => await ApplyFiltersAsync(_repository.GetAll(), request);

    public async Task<PaginationModel<Design>> GetAllByCarIdAsync(FilteredCarDesignsGetRequest request)
    {
        if (!Guid.TryParse(request.CarId, out var carId)) throw new EntityNotFoundException();

        return await ApplyFiltersAsync(_repository.GetAllByCarId(carId), request);
    }

    public async Task<Design> CreateAsync(Design entity, IFormFile thumbnail, IList<IFormFile> gallery)
    {
        await _repository.CreateAsync(entity);
        entity.DesignOptions.ThumbnailUrl = await _imageManager.SaveDesignThumbnail(thumbnail, entity.Title);
        await _repository.SaveAsync();

        await AddImagesToGallery(gallery, entity.Title, entity.Id);

        return entity;
    }

    public async override Task DeleteAsync(Guid id)
    {
        var entity = await _repository.GetById(id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        await _imageManager.DeleteImages(entity.DesignOptions.Gallery.Select(x => x.ImageUrl)
                                                                     .Append(entity.DesignOptions.ThumbnailUrl)
                                                                     .ToList());

        if (entity.DesignOptions.Gallery != null) await DeleteImagesFromGallery(entity.DesignOptions.Gallery.ToList());

        _repository.Delete(entity);
        await _repository.SaveAsync();
    }

    public async Task<PaginationModel<Design>> GetLastDesigns(GetLastDesignsRequest request)
        => SetDescriptionLendth(
            await _repository.GetAll()
                .OrderByDescending(d => d.CreationDate)
                .PaginateAsync(request.Page, request.PageSize),
            request.DescriptionLimit);

    public async Task<Design> SetRating(DesignRating request)
    {
        var design = await _repository.GetById(request.EntityId).FirstOrDefaultAsync() ?? throw new BadRequestException(Messages.BAD_REQUEST);
        var rating = await _ratingRepository.GetByKey(request.UserId, request.EntityId);

        if (rating != null)
        {
            rating.Rating = request.Rating;
            await _ratingRepository.SaveAsync();

            return design;
        }

        rating = request;

        await _ratingRepository.CreateAsync(rating);
        await _ratingRepository.SaveAsync();

        return design;
    }

    private async Task AddImagesToGallery(IList<IFormFile> gallery, string designTitle, Guid designId)
    {
        var galleryUrls = await _imageManager.SaveDesignGallery(gallery, designTitle);

        foreach (var path in galleryUrls)
        {
            await _galleryRepository.CreateAsync(new GalleryImage { DesignOptionsId = designId, ImageUrl = path });
        }

        await _galleryRepository.SaveAsync();
    }

    private async Task DeleteImagesFromGallery(List<GalleryImage> images)
    {
        foreach (var image in images)
        {
            _galleryRepository.Delete(image);
        }

        await _galleryRepository.SaveAsync();
    }

    private async Task<PaginationModel<Design>> ApplyFiltersAsync(IQueryable<Design> query, FilteredDesignsGetRequest request)
    {
        var lowerSearch = request.SearchQuery.ToLower();

        query = query.Where(
            x => x.Title.ToLower().Contains(lowerSearch)
            || x.User.UserName.ToLower().Contains(lowerSearch)
            || x.DesignOptions.Description.ToLower().Contains(lowerSearch));

        return SetDescriptionLendth(await query.PaginateAsync(request.Page, request.PageSize), request.DescriptionLimit);
    }

    private PaginationModel<Design> SetDescriptionLendth(PaginationModel<Design> result, int descriptionLimit)
    {
        foreach (var item in result.Entities)
        {
            if (descriptionLimit < item.DesignOptions.Description?.Length)
            {
                item.DesignOptions.Description = item.DesignOptions.Description
                    .Substring(0, descriptionLimit) + "...";
            }
        }
        return result;
    }
}
