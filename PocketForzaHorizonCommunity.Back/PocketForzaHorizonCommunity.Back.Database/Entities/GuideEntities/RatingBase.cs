namespace PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities;

public class RatingBase<TEntity> where TEntity : class
{
    public double Rating { get; set; }
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;
    public Guid EntityId { get; set; }
    public TEntity Entity { get; set; } = null!;
}
