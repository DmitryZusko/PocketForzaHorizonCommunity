using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;

public class RecordStatistics
{
    [Key]
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;

    [Required]
    public int HighestDriftScore { get; set; }
    [Required]
    public float HighestDangerSignScore { get; set; }
    [Required]
    public float HighestSpeedTrapScore { get; set; }
    [Required]
    public float HighestSpeedZoneScore { get; set; }
    [Required]
    [Column(TypeName = "bigint")]
    public long LongestSkillChainInTicks { get; set; }
    [Required]
    public float TopSpeed { get; set; }
    [Required]
    public float AvarageSpeed { get; set; }
    [Required]
    public int DistanceDriven { get; set; }
    [Required]
    public float LongestDrift { get; set; }
    [Required]
    public float LongestJump { get; set; }
}
