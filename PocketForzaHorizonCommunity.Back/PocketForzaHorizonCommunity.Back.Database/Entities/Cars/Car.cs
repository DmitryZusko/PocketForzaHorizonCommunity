using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

public class Car : EntityBase
{
    [Required]
    public string ModelName { get; set; } = string.Empty;
    [Required]
    public int Year { get; set; }
    [Required]
    public int Price { get; set; }
    [Required]
    public string ImagePath { get; set; } = string.Empty;
    [Required]
    public Guid ManufactureId { get; set; }
    public Manufacture Manufacture { get; set; } = null!;
    [Required]
    public Guid CarTypeId { get; set; }
    public CarType CarType { get; set; } = null!;

    public ICollection<Tune> Tunes { get; set; } = new List<Tune>();
    public ICollection<Design> Designs { get; set; } = new List<Design>();
    public ICollection<OwnedCarsByUsers> OwnedCarsByUsers { get; set; } = new List<OwnedCarsByUsers>();
}
