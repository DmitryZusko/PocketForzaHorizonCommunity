using PocketForzaHorizonCommunity.Back.Database.Enums;

namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;

public class TuneFullInfoDto : TuneDto
{
    public string EngineDescription { get; set; } = string.Empty;
    public EngineType Engine { get; set; }
    public AspirationType Aspiration { get; set; }
    public IntakeType Intake { get; set; }
    public IgnitionType Ignition { get; set; }
    public DisplacementType Displacement { get; set; }
    public ExhaustType Exhaust { get; set; }

    public string HandlingDescription { get; set; } = string.Empty;
    public BrakesType Brakes { get; set; }
    public SuspensionType Suspension { get; set; }
    public AntirollBarsType AntirollBars { get; set; }
    public RollCageType RollCage { get; set; }

    public string DrivetrainDescription { get; set; } = string.Empty;
    public ClutchType Clutch { get; set; }
    public TransmissionType Transmission { get; set; }
    public DifferentialType Differential { get; set; }

    public string TiersDescription { get; set; } = string.Empty;
    public TiersCompoundType Compound { get; set; }
    public TiersWidthType FrontTierWidth { get; set; }
    public TiersWidthType RearTierWidth { get; set; }
    public TrackWidthType FrontTrackwidth { get; set; }
    public TrackWidthType RearTrackWidth { get; set; }
}