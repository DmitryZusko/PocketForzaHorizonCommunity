namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;

public class CarDto
{
    public string Id { get; set; } = string.Empty;
    public string Model { get; set; } = string.Empty;
    public int Year { get; set; }
    public int Price { get; set; }
    public string ImageUrl { get; set; } = null!;
    public string Manufacture { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public bool IsOwnByUser { get; set; } = false;
}
