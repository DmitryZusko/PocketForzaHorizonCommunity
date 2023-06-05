using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.OnlinePlayerCount;

public class PlayerCountResponse
{
    [JsonProperty("response")]
    public PlayerCount PlayerCount { get; set; }
}
