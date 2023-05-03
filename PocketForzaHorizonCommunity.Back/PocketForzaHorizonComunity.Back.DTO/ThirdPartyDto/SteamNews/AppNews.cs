using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamNews;

public class AppNews
{
    [JsonProperty("appid")]
    public int AppId { get; set; }

    [JsonProperty("newsitems")]
    public List<NewsItem> NewsItems { get; set; } = null!;

    [JsonProperty("count")]
    public int Count { get; set; }
}
