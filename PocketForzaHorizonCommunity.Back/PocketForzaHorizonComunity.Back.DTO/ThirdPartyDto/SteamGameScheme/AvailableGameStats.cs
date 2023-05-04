using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamGameScheme;

public class AvailableGameStats
{
    [JsonProperty("achievements")]
    public List<AchievementScheme> AchievementSchemes { get; set; }
}
