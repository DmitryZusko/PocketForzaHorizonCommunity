using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.OnlinePlayerCount;

public class PlayerCount
{
    [JsonProperty("player_count")]
    public int PlayersCount { get; set; }

    [JsonProperty("result")]
    public int Result { get; set; }
}
