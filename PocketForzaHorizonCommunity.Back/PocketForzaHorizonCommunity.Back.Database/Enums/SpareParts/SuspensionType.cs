using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PocketForzaHorizonCommunity.Back.Database.Enums.SpareParts;

[JsonConverter(typeof(StringEnumConverter))]
public enum SuspensionType
{
    StockSuspension,
    StreetSuspension,
    SportSuspension,
    RaceSuspension,
    RallySuspension,
    DriftSuspension,
    OffroadSuspension,
}


