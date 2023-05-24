using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

public class CarType : EntityBase
{
    [Required]
    public string Name { get; set; } = null!;

    public ICollection<Car> Cars { get; set; } = new List<Car>();
}
