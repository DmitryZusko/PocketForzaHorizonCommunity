using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamAchivementStats;

public class AchivementStats
{
    [JsonProperty("achievementpercentages")]
    public AchievementPercentages AchievementPercentages { get; set; } = new AchievementPercentages();

}
