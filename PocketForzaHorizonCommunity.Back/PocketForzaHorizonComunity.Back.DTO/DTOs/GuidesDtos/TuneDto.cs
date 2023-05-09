using PocketForzaHorizonCommunity.Back.Database.Enums;

namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;

public class TuneDto
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string ForzaShareCode { get; set; } = string.Empty;
    public double Rating { get; set; }
    public DateTime CreationDate { get; set; }
    public string AuthorUsername { get; set; } = string.Empty;
    public string CarModel { get; set; } = string.Empty;
    public EngineType EngineType { get; set; }
    public AspirationType AspirationType { get; set; }
    public TiresCompoundType TiresCompound { get; set; }
}
