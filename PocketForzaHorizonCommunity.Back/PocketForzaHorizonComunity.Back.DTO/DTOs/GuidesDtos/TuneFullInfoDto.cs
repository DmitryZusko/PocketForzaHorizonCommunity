using PocketForzaHorizonCommunity.Back.Database.Enums.SpareParts;

namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;

public class TuneFullInfoDto : TuneDto
{
    public string EngineDescription { get; set; } = string.Empty;
    public IntakeType Intake { get; set; }
    public IgnitionType Ignition { get; set; }
    public DisplacementType Displacement { get; set; }
    public ExhaustType Exhaust { get; set; }

    public string HandlingDescription { get; set; } = string.Empty;
    public BrakesType Brakes { get; set; }
    public SuspensionType Suspension { get; set; }
    public AntiRollBarsType AntiRollBars { get; set; }
    public RollCageType RollCage { get; set; }

    public string DrivetrainDescription { get; set; } = string.Empty;
    public ClutchType Clutch { get; set; }
    public TransmissionType Transmission { get; set; }
    public DifferentialType Differential { get; set; }

    public string TiresDescription { get; set; } = string.Empty;
    public TiresWidthType FrontTireWidth { get; set; }
    public TiresWidthType RearTireWidth { get; set; }
    public TrackWidthType FrontTrackWidth { get; set; }
    public TrackWidthType RearTrackWidth { get; set; }
}