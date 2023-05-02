using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;

public class NewsItem
{
    [JsonProperty("gid")]
    public string Gid { get; set; } = string.Empty;

    [JsonProperty("title")]
    public string Title { get; set; } = string.Empty;

    [JsonProperty("url")]
    public string Url { get; set; } = string.Empty;

    [JsonProperty("contents")]
    public string Contents { get; set; } = string.Empty;

}
