using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;

public class OnlineStatistics : UserStatisticsBase
{

    [Required]
    public int RecievedKudos { get; set; }
    [Required]
    public int GivenKudos { get; set; }
    [Required]
    public int ArcadeEventsEntered { get; set; }
    [Required]
    public int ArcadeEventsCompleted { get; set; }
    [Required]
    public int FlagRushWon { get; set; }
    [Required]
    public int TeamFlagRushWon { get; set; }
    [Required]
    public int FlagsCaptured { get; set; }
    [Required]
    public int InfectedGamesWon { get; set; }
    [Required]
    public int TimesInfectedOthers { get; set; }
    [Required]
    public int TimesInfectedByOthers { get; set; }
    [Required]
    public int TeamKingGamesWon { get; set; }
    [Required]
    public int KingGamesWon { get; set; }
    [Required]
    public int RivalsBeaten { get; set; }
    [Required]
    public int RivalsLapsCompleted { get; set; }
}
