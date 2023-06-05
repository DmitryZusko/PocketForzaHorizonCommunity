using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;

public class Design : EntityBase
{
    [Required]
    public string Title { get; set; } = null!;
    [Required]
    public string ForzaShareCode { get; set; } = null!;
    public Guid? UserId { get; set; }
    public ApplicationUser? User { get; set; } = null!;
    [Required]
    public Guid CarId { get; set; }
    public Car Car { get; set; } = null!;
    [Required]
    public DesignOptions DesignOptions { get; set; } = null!;
    [Required]
    public DateTime CreationDate { get; set; } = DateTime.Now;
    public List<DesignRating> Ratings { get; set; } = new List<DesignRating>();
}
