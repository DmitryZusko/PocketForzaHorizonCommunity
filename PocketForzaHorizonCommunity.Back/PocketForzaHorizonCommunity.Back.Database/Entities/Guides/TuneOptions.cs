using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

public class TuneOptions
{
    [Key]
    public Guid TuneId { get; set; }
    public Tune Tune { get; set; } = null!;

    public string EngineDescription { get; set; } = string.Empty;
    [Required]
    public string Engine { get; set; } = string.Empty;
    [Required]
    public string Aspiration { get; set; } = string.Empty;
    [Required]
    public string Intake { get; set; } = string.Empty;
    [Required]
    public string Ignition { get; set; } = string.Empty;
    [Required]
    public string Displacement { get; set; } = string.Empty;
    [Required]
    public string Exhaust { get; set; } = string.Empty;

    public string HandlingDescription { get; set; } = string.Empty;
    [Required]
    public string Brakes { get; set; } = string.Empty;
    [Required]
    public string Suspension { get; set; } = string.Empty;
    [Required]
    public string AntirollBars { get; set; } = string.Empty;
    [Required]
    public string RollCage { get; set; } = string.Empty;

    public string DrivetrainDescription { get; set; } = string.Empty;
    [Required]
    public string Clutch { get; set; } = string.Empty;
    [Required]
    public string Transmission { get; set; } = string.Empty;
    [Required]
    public string Differential { get; set; } = string.Empty;

    public string TiersDescription { get; set; } = string.Empty;
    [Required]
    public string Compound { get; set; } = string.Empty;
    [Required]
    public string FrontTierWidth { get; set; } = string.Empty;
    [Required]
    public string RearTierWidth { get; set; } = string.Empty;
    [Required]
    public string FrontTrackwidth { get; set; } = string.Empty;
    [Required]
    public string RearTrackWidth { get; set; } = string.Empty;
}
