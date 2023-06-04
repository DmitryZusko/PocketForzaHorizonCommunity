using PocketForzaHorizonCommunity.Back.Database.Entities.ImageEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.ImageRepos;

public class AlbumRepository : RepositoryBase<Album>, IAlbumRepository
{
    public AlbumRepository(ApplicationDbContext context) : base(context) { }
}
