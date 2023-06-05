using Microsoft.AspNetCore.Http;

namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

public class CreateCarRequest
{
    public string Model { get; set; } = null!;
    public int Year { get; set; }
    public int Price { get; set; }
    public IFormFile Image { get; set; } = null!;
    public string ManufactureId { get; set; } = null!;
    public string CarTypeId { get; set; } = null!;
}
