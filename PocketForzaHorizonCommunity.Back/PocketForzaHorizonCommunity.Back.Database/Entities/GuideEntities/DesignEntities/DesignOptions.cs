using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;

public class DesignOptions
{
    [Key]
    public Guid DesignId { get; set; }
    public Design Design { get; set; } = null!;
    public string? ThumbnailUrl { get; set; } = null!;
    public string? Description { get; set; } = string.Empty;
    public ICollection<GalleryImage> Gallery { get; set; } = new List<GalleryImage>();
}
