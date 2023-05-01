using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

public class DesignOptions
{
    [Key]
    public Guid DesignId { get; set; }
    public Design Design { get; set; } = null!;
    public string? ThumbnailPath { get; set; } = null!;
    public string Description { get; set; } = string.Empty;
    public ICollection<GalleryImage> Gallery { get; set; } = new List<GalleryImage>();
}
