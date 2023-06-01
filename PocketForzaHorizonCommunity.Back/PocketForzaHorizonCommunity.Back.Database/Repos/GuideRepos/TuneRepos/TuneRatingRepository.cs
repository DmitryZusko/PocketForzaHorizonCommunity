using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Database.Repos.GuideRepos.TuneRepos;

public class TuneRatingRepository : RatingRepositoryBase<TuneRating, Tune>, ITuneRatingRepository
{
    public TuneRatingRepository(ApplicationDbContext context) : base(context) { }
}
