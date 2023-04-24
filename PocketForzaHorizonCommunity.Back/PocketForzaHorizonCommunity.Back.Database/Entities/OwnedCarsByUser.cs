using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Database.Entities;

public class OwnedCarsByUsers
{
    public int Id { get; set; }
    public Guid CarId { get; set; }
    public Car Car { get; set; } = null!;
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;
}
