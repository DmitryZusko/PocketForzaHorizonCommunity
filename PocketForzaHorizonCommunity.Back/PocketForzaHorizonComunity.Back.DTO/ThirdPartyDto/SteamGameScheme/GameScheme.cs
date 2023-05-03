using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamGameScheme;

public class GameScheme
{
    [JsonProperty("game")]
    public GameParams GameParams { get; set; } = new GameParams();
}
