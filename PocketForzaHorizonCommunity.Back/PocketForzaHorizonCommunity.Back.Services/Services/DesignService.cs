using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class DesignService : ServiceWithFilesBase<IDesignRepository, Design>, IDesignService
{
    private IGalleryRepository _galleryRepository;
    public DesignService(IDesignRepository repository, IConfiguration config, IGalleryRepository galleryRepository) : base(repository, config)
    {
        _galleryRepository = galleryRepository;
    }

    public override async Task<Design> CreateAsync(Design entity, IFormFile thumbnail)
    {
        await _repository.CreateAsync(entity);
        await _repository.SaveAsync();

        var path = Path.Combine(_configuration["Images:Designs"], entity.Id.ToString(), "_thumbnail");
        using (var stream = new FileStream(path, FileMode.Create))
        {
            await thumbnail.CopyToAsync(stream);
        }

        entity.DesignOptions.ThumbnailPath = path;
        await _repository.SaveAsync();

        return entity;
    }

    public async Task<Design> CreateAsync(Design entity, IFormFile thumbnail, List<IFormFile> gallery)
    {
        await CreateAsync(entity, thumbnail);

        for (var i = 0; i < gallery.Count; i++)
        {
            var path = Path.Combine(_configuration["Image:Designs"], entity.Id.ToString(), $"_{i}");
            using (var stream = new FileStream(path, FileMode.Create))
            {
                await gallery[i].CopyToAsync(stream);
            }

            await _galleryRepository.CreateAsync(new GalleryImage { DesignOptionsId = entity.Id, ImagePath = path });
        }

        await _galleryRepository.SaveAsync();

        return entity;
    }

    public async override Task Delete(Guid id)
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

        await _galleryRepository.SaveAsync();
        _repository.Delete(entity);
        await _repository.SaveAsync();
    }
}
