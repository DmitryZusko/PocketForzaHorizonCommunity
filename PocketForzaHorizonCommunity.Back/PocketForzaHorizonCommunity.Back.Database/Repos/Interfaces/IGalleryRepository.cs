using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces
{
    public interface IGalleryRepository
    {
        Task CreateAsync(GalleryImage entity);
        void Delete(GalleryImage entity);
        IQueryable<GalleryImage> GetByDesignId(Guid id);
        Task SaveAsync();
    }
}