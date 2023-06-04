using Microsoft.EntityFrameworkCore;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;

[PrimaryKey(nameof(DesignOptionsId), nameof(ImageUrl))]
public class GalleryImage
{
    public Guid DesignOptionsId { get; set; }
    public DesignOptions DesignOptions { get; set; } = null!;
    public string ImageUrl { get; set; } = null!;
}
