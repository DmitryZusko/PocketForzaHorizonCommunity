using Microsoft.EntityFrameworkCore;

namespace PocketForzaHorizonCommunity.Back.Database.Entities;

[PrimaryKey(nameof(UserId), nameof(FriendId))]
public class UsersFriends
{
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;
    public Guid FriendId { get; set; }
    public ApplicationUser Friend { get; set; } = null!;
}
