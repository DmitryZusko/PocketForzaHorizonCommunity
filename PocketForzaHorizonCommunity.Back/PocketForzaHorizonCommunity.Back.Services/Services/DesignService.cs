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

    public async Task<Design> CreateAsync(Design entity, IFormFile thumbnail)
    {
        await _repository.CreateAsync(entity);
        await _repository.SaveAsync();

        entity.DesignOptions.ThumbnailPath = await _imageManager.SaveDesignThumbnail(thumbnail, entity.Id);
        await _repository.SaveAsync();

        return entity;
    }

    public async Task<Design> CreateAsync(Design entity, IFormFile thumbnail, List<IFormFile> gallery)
    {
        await CreateAsync(entity, thumbnail);

        var galleryPath = await _imageManager.SaveDesignGallery(gallery, entity.Id);

        foreach (var path in galleryPath)
        {
            await _galleryRepository.CreateAsync(new GalleryImage { DesignOptionsId = entity.Id, ImagePath = path });
        }

        await _galleryRepository.SaveAsync();

        return entity;
    }

    public async override Task DeleteAsync(Guid id)
    {
        var entity = await _repository.GetById(id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        File.Delete(entity.DesignOptions.ThumbnailPath);

        if (entity.DesignOptions.Gallery != null && entity.DesignOptions.Gallery.Count > 0)
        {
            foreach (var image in entity.DesignOptions.Gallery)
            {
                File.Delete(image.ImagePath);
                _galleryRepository.Delete(image);
            }
        }

        _imageManager.DeleteDesignImages(entity.DesignOptions.ThumbnailPath, entity.DesignOptions.Gallery.ToList());

        await _galleryRepository.SaveAsync();
        _repository.Delete(entity);
        await _repository.SaveAsync();
    }
}
