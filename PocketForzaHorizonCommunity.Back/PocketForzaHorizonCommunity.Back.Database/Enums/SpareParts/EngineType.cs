using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PocketForzaHorizonCommunity.Back.Database.Enums.SpareParts;

[JsonConverter(typeof(StringEnumConverter))]
public enum EngineType
{
    VVTI4,
    TurboRallyI4,
    TurboRallyF4,
    F6,
    RacingI6T,
    V8,
    V8TDiesel,
    V8TT,
    RacingV8,
    v10,
    V12,
}


