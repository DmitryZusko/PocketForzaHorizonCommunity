using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PocketForzaHorizonCommunity.Back.Database.Enums;

[JsonConverter(typeof(StringEnumConverter))]
public enum IgnitionType
{
    StockIgnition,
    StreetIgnition,
    SportIgnition,
    RaceIgnition,
}


