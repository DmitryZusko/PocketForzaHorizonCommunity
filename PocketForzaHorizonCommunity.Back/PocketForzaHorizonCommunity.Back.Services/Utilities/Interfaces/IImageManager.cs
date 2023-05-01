using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces
{
    public interface IImageManager
    {
        public Task<string> SaveCarThumbnail(IFormFile image, Guid carId);
        public Task<List<string>> SaveDesignGallery(IList<IFormFile> images, Guid designId);
        public Task<string> SaveDesignThumbnail(IFormFile image, Guid designId);
        public void DeleteCarThumbnail(string thumbnailPath);
        public void DeleteDesignImages(string thumbnailPath, List<GalleryImage>? gallery);
    }
}