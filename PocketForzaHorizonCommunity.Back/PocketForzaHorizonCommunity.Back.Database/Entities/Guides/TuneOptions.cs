using PocketForzaHorizonCommunity.Back.Database.Enums;
using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

public class TuneOptions
{
    [Key]
    public Guid TuneId { get; set; }
    public Tune Tune { get; set; } = null!;

    public string EngineDescription { get; set; } = string.Empty;
    [Required]
    public EngineType Engine { get; set; }
    [Required]
    public AspirationType Aspiration { get; set; }
    [Required]
    public IntakeType Intake { get; set; }
    [Required]
    public IgnitionType Ignition { get; set; }
    [Required]
    public DisplacementType Displacement { get; set; }
    [Required]
    public ExhaustType Exhaust { get; set; }

    public string HandlingDescription { get; set; } = string.Empty;
    [Required]
    public BrakesType Brakes { get; set; }
    [Required]
    public SuspensionType Suspension { get; set; }
    [Required]
    public AntiRollBarsType AntirollBars { get; set; }
    [Required]
    public RollCageType RollCage { get; set; }

    public string DrivetrainDescription { get; set; } = string.Empty;
    [Required]
    public ClutchType Clutch { get; set; }
    [Required]
    public TransmissionType Transmission { get; set; }
    [Required]
    public DifferentialType Differential { get; set; }

    public string TiersDescription { get; set; } = string.Empty;
    [Required]
    public TiersCompoundType Compound { get; set; }
    [Required]
    public TiersWidthType FrontTierWidth { get; set; }
    [Required]
    public TiersWidthType RearTierWidth { get; set; }
    [Required]
    public TrackWidthType FrontTrackwidth { get; set; }
    [Required]
    public TrackWidthType RearTrackWidth { get; set; }
}
