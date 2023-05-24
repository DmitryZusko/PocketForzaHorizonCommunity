using Microsoft.EntityFrameworkCore;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;

[PrimaryKey(nameof(UserId), nameof(EntityId))]
public class DesignRating : RatingBase<Design>
{
}
