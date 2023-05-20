using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PocketForzaHorizonCommunity.Back.Database.Enums.SpareParts;

[JsonConverter(typeof(StringEnumConverter))]
public enum ExhaustType
{
    StockExhaust,
    StreetExhaust,
    SportExhaust,
    RaceExhaust,
}


