using Microsoft.EntityFrameworkCore;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;

[PrimaryKey(nameof(UserId), nameof(EntityId))]
public class TuneRating : RatingBase<Tune>
{

}
