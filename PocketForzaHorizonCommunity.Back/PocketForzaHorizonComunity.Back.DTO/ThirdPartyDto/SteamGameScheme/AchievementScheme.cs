using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamGameScheme;

public class AchievementScheme
{
    [JsonProperty("name")]
    public string Name { get; set; } = null!;

    [JsonProperty("displayName")]
    public string DisplayName { get; set; } = null!;

    [JsonProperty("description")]
    public string Description { get; set; } = null!;

    [JsonProperty("icon")]
    public Uri Icon { get; set; } = null!;
}
