using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

public class DesignOptions
{
    [Key]
    public Guid DesignId { get; set; }
    public Design Design { get; set; } = null!;
    [Required]
    public string PathToImages { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}
