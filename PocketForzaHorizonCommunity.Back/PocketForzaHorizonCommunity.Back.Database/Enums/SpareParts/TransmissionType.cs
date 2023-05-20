using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PocketForzaHorizonCommunity.Back.Database.Enums.SpareParts;

[JsonConverter(typeof(StringEnumConverter))]
public enum TransmissionType
{
    StockTransmission,
    StreetTransmission,
    SportTransmission,
    Race6Speed,
    Race7Speed,
    Race8Speed,
    Race9Speed,
}


