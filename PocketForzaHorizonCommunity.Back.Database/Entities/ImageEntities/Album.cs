using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.ImageEntities;

public class Album : EntityBase
{
    [Required]
    public string ImgurId { get; set; } = null!;
    [Required]
    public string Name { get; set; } = null!;
}
