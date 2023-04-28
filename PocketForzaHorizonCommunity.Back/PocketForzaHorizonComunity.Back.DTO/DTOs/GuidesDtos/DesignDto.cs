namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;

public class DesignDto
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string ForzaShareCode { get; set; } = string.Empty;
    public double Rating { get; set; }
    public string AuthorUserName { get; set; } = string.Empty;
    public string CarModel { get; set; } = string.Empty;
    public byte[] Thumbnail { get; set; } = null!;
}
