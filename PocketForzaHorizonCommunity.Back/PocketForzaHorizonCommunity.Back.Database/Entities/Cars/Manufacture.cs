using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

public class Manufacture : EntityBase
{
    [Required]
    public string Name { get; set; } = string.Empty;
    [Required]
    public string Country { get; set; } = string.Empty;

    public ICollection<Car> Cars { get; set; } = new List<Car>();
}
