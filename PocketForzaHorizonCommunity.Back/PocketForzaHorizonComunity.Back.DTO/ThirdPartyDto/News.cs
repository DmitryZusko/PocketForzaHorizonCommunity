using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;

public class News
{
    [JsonProperty("appnews")]
    public AppNews AppNews { get; set; } = null!;
}
