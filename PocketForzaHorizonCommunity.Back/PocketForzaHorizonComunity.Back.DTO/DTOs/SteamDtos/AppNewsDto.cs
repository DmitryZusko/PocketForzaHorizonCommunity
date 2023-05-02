namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.SteamDtos;

public class AppNewsDto
{
    public int AppId { get; set; }
    public List<NewsItemDto> NewsItems { get; set; } = null!;
    public int Count { get; set; }
}
