namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.StatisticsDtos;

public class GeneralStatisticsDto
{
    public int GarageValue { get; set; }
    public TimeSpan TimeDriven { get; set; }
    public int TotalVictories { get; set; }
    public int TotalPodiums { get; set; }
    public int TotalCleanLaps { get; set; }
    public int CollisionsPerRace { get; set; }
    public int DailyChallengesCompleted { get; set; }
    public int WeeklyChallengesComplited { get; set; }
    public string FavouriteCarModel { get; set; } = string.Empty;
}