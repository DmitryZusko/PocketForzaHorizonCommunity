using Microsoft.AspNetCore.Http;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces
{
    public interface IImageManager
    {
        public Task<string> SaveCarThumbnail(IFormFile image, string name);
        public Task<string> SaveDesignThumbnail(IFormFile image, string name);
        public Task<List<string>> SaveDesignGallery(IList<IFormFile> images, string designName);
        public Task DeleteImages(List<string> imageUrls);
    }
}