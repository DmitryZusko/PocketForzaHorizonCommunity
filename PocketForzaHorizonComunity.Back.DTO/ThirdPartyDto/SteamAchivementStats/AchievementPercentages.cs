using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamAchivementStats;

public class AchievementPercentages
{
    [JsonProperty("achievements")]
    public List<Achievement> Achievements { get; set; } = new List<Achievement>();
}
