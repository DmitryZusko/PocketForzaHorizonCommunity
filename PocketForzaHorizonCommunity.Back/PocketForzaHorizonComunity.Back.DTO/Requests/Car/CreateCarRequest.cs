namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

public class CreateCarRequest
{
    public string Model { get; set; } = null!;
    public int Year { get; set; }
    public int Price { get; set; }
    public string Manufacture { get; set; } = null!;
    public string CarType { get; set; } = null!;
}
