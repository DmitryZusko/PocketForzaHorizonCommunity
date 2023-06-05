using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamNews;

public class News
{
    [JsonProperty("appnews")]
    public AppNews AppNews { get; set; } = null!;
}
