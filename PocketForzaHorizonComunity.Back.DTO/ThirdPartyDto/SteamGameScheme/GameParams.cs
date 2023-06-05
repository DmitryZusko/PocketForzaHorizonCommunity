using Newtonsoft.Json;

namespace PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamGameScheme;

public class GameParams
{
    [JsonProperty("availableGameStats")]
    public AvailableGameStats AvailableGameStats { get; set; }
}
