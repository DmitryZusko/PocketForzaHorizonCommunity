namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Steam;

public class GetNewsRequest
{
    public int Count { get; set; } = 5;
    public int MaxLength { get; set; } = 300;
}
