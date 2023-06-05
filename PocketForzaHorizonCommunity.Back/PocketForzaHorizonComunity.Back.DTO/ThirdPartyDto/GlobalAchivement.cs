namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;

public class GlobalAchivement
{
    public string Name { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public Uri Icon { get; set; } = null!;
    public double GlobalScorePercent { get; set; }
}
