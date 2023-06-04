namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;

public class DesignDto
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string ForzaShareCode { get; set; } = string.Empty;
    public double Rating { get; set; }
    public DateTime CreationDate { get; set; }
    public string AuthorUsername { get; set; } = string.Empty;
    public string CarModel { get; set; } = string.Empty;
    public string ThumbnailUrl { get; set; } = null!;
}
