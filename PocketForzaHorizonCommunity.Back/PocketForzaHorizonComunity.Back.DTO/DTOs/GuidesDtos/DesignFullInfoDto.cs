namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;

public class DesignFullInfoDto : DesignDto
{
    public string Description { get; set; } = string.Empty;
    public ICollection<byte[]> Images { get; set; } = new List<byte[]>();
}
