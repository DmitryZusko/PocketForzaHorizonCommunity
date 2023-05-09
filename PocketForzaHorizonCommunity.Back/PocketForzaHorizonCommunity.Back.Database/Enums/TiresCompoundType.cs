using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PocketForzaHorizonCommunity.Back.Database.Enums;

[JsonConverter(typeof(StringEnumConverter))]
public enum TiresCompoundType
{
    StockCompound,
    StreetCompound,
    SportCompound,
    SemiSlickCompound,
    SlickCompound,
    DriftCompound,
    DragCompound,
    RallyCompound,
    OffroadCompound,
    SnowCompound,
    VintageCompound,
}


