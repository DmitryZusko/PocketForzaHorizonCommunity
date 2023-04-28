namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;

public class DesignFullInfoDto : DesignDto
{
    public string Description { get; set; } = string.Empty;
    public IList<byte[]> Gallery { get; set; } = new List<byte[]>();
}
