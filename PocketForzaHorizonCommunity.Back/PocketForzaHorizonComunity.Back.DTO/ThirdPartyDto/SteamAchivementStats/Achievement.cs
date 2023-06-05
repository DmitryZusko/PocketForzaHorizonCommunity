using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamAchivementStats;

public class Achievement
{
    [JsonProperty("name")]
    public string Name { get; set; } = string.Empty;

    [JsonProperty("percent")]
    public double Percent { get; set; }
}
