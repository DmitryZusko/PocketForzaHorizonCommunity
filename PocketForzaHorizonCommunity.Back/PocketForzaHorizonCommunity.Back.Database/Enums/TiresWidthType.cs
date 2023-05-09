using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PocketForzaHorizonCommunity.Back.Database.Enums;

[JsonConverter(typeof(StringEnumConverter))]
public enum TiresWidthType
{
    MM205,
    MM225,
    MM245,
    MM265,
    MM285,
    MM305,
}


