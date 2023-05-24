using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;

public class RecordsStatistics : UserStatisticsBase
{

    [Required]
    public int HighestDriftScore { get; set; }
    [Required]
    public double HighestDangerSignScore { get; set; }
    [Required]
    public double HighestSpeedTrapScore { get; set; }
    [Required]
    public double HighestSpeedZoneScore { get; set; }
    [Required]
    [Column(TypeName = "bigint")]
    public long LongestSkillChainInTicks { get; set; }
    [Required]
    public double TopSpeed { get; set; }
    [Required]
    public double AvarageSpeed { get; set; }
    [Required]
    public int DistanceDriven { get; set; }
    [Required]
    public double LongestDrift { get; set; }
    [Required]
    public double LongestJump { get; set; }
}
