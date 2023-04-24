using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

public class Tune : EntityBase
{
    [Required]
    public string Title { get; set; } = null!;
    [Required]
    public string ForzaShareCode { get; set; } = null!;
    [Required]
    public float Rating { get; set; }
    [Required]
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;
    [Required]
    public Guid CarId { get; set; }
    public Car Car { get; set; } = null!;
    [Required]
    public TuneOptions TuneOptions { get; set; } = null!;
}
