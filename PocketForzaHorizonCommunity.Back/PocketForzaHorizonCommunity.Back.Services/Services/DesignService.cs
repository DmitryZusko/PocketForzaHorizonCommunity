using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class DesignService : ServiceBase<IDesignRepository, Design>, IDesignService
{
    private IGalleryRepository _galleryRepository;
    private IImageManager _imageManager;
    public DesignService(IDesignRepository repository, IImageManager imageManager, IGalleryRepository galleryRepository) : base(repository)
    {
        _galleryRepository = galleryRepository;
        _imageManager = imageManager;
    }

    //public async Task<Design> CreateAsync(Design entity, IFormFile thumbnail)
    //{
    //    await _repository.CreateAsync(entity);
    //    await _repository.SaveAsync();

    //    entity.DesignOptions.ThumbnailPath = await _imageManager.SaveDesignThumbnail(thumbnail, entity.Id);
    //    await _repository.SaveAsync();

    //    return entity;
    //}

    public async Task<Design> CreateAsync(Design entity, IFormFile thumbnail, IList<IFormFile> gallery)
    {
        //await CreateAsync(entity, thumbnail);

        await _repository.CreateAsync(entity);
        await _repository.SaveAsync();

        entity.DesignOptions.ThumbnailPath = await _imageManager.SaveDesignThumbnail(thumbnail, entity.Id);
        await _repository.SaveAsync();

        await AddImagesToGallery(gallery, entity.Id);

        return entity;
    }

    public async override Task DeleteAsync(Guid id)
    {
        var entity = await _repository.GetById(id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        _imageManager.DeleteDesignImages(entity.DesignOptions.ThumbnailPath, entity.DesignOptions.Gallery?.ToList());

        if (entity.DesignOptions.Gallery != null) await DeleteImagesFromGallery(entity.DesignOptions.Gallery.ToList());

        _repository.Delete(entity);
        await _repository.SaveAsync();
    }

    private async Task AddImagesToGallery(IList<IFormFile> gallery, Guid entityId)
    {
        var galleryPath = await _imageManager.SaveDesignGallery(gallery, entityId);

        foreach (var path in galleryPath)
        {
            await _galleryRepository.CreateAsync(new GalleryImage { DesignOptionsId = entityId, ImagePath = path });
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
}
