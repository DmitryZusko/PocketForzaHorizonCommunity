using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;

public class GeneralStatistics : UserStatisticsBase
{

    [Required]
    public int GarageValue { get; set; }
    [Required]
    [Column(TypeName = "bigint")]
    public long TimeDrivenInTicks { get; set; }
    [Required]
    public int TotalVictories { get; set; }
    [Required]
    public int TotalPodiums { get; set; }
    [Required]
    public int TotalCleanLaps { get; set; }
    [Required]
    public int CollisionsPerRace { get; set; }
    [Required]
    public int DailyChallengesCompleted { get; set; }
    [Required]
    public int WeeklyChallengesComplited { get; set; }
    [Required]
    public Guid FavouriteCarId { get; set; }
    public Car Car { get; set; } = null!;
}
