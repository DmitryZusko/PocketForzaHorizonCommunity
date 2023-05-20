using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PocketForzaHorizonCommunity.Back.Database.Enums.SpareParts;

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


