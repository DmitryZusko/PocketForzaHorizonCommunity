using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

public class Design : EntityBase
{
    [Required]
    public string Name { get; set; } = string.Empty;
    [Required]
    public string ForzaShareCode { get; set; } = string.Empty;
    [Required]
    public float Rating { get; set; }
    [Required]
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;
    [Required]
    public Guid CarId { get; set; }
    public Car Car { get; set; } = null!;
    [Required]
    public DesignOptions DesignOptions { get; set; } = null!;
}
