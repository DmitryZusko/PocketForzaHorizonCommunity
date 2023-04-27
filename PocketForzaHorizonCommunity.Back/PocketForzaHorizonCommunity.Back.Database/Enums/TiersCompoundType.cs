using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PocketForzaHorizonCommunity.Back.Database.Enums;

[JsonConverter(typeof(StringEnumConverter))]
public enum TiersCompoundType
{
    StockCompound,
    StreetCompound,
    SportCompound,
    SemiSlickCompound,
    SlickCompound,
    DriftCompound,
    DragCompound,
    RallyCompound,
    OfroadCompound,
    SnowCompound,
    VintageCompound,
}


