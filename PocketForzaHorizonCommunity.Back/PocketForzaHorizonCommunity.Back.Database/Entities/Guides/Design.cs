using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

public class Design : EntityBase
{
    [Required]
    public string Title { get; set; } = null!;
    [Required]
    public string ForzaShareCode { get; set; } = null!;
    [Required]
    public double Rating { get; set; } = 0.0;
    [Required]
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;
    [Required]
    public Guid CarId { get; set; }
    public Car Car { get; set; } = null!;
    [Required]
    public DesignOptions DesignOptions { get; set; } = null!;
}
