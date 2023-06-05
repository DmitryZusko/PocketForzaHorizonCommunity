using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.GuideRepos.DesignRepos;

public class DesignRatingRepository : RatingRepositoryBase<DesignRating, Design>, IDesignRatingRepository
{
    public DesignRatingRepository(ApplicationDbContext context) : base(context) { }
}