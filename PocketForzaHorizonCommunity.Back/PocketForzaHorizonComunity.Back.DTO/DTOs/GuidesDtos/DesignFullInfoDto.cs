namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;

public class DesignFullInfoDto : DesignDto
{
    public IList<byte[]> Gallery { get; set; } = new List<byte[]>();
}
