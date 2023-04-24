using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

public class TuneOptions
{
    [Key]
    public Guid TuneId { get; set; }
    public Tune Tune { get; set; } = null!;

    public string EngineDescription { get; set; } = string.Empty;
    [Required]
    public string Engine { get; set; } = null!;
    [Required]
    public string Aspiration { get; set; } = null!;
    [Required]
    public string Intake { get; set; } = null!;
    [Required]
    public string Ignition { get; set; } = null!;
    [Required]
    public string Displacement { get; set; } = null!;
    [Required]
    public string Exhaust { get; set; } = null!;

    public string HandlingDescription { get; set; } = string.Empty;
    [Required]
    public string Brakes { get; set; } = null!;
    [Required]
    public string Suspension { get; set; } = null!;
    [Required]
    public string AntirollBars { get; set; } = null!;
    [Required]
    public string RollCage { get; set; } = null!;

    public string DrivetrainDescription { get; set; } = string.Empty;
    [Required]
    public string Clutch { get; set; } = null!;
    [Required]
    public string Transmission { get; set; } = null!;
    [Required]
    public string Differential { get; set; } = null!;

    public string TiersDescription { get; set; } = string.Empty;
    [Required]
    public string Compound { get; set; } = null!;
    [Required]
    public string FrontTierWidth { get; set; } = null!;
    [Required]
    public string RearTierWidth { get; set; } = null!;
    [Required]
    public string FrontTrackwidth { get; set; } = null!;
    [Required]
    public string RearTrackWidth { get; set; } = null!;
}
