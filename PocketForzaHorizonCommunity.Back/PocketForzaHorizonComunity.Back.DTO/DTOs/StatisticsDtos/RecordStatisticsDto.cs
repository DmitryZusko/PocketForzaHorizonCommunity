namespace PocketForzaHorizonComunity.Back.DTO.DTOs.StatisticsDtos;

public class RecordStatisticsDto
{
    public int HighestDriftScore { get; set; }
    public float HighestDangerSignScore { get; set; }
    public float HighestSpeedTrapScore { get; set; }
    public float HighestSpeedZoneScore { get; set; }
    public TimeSpan LongestSkillChain { get; set; }
    public float TopSpeed { get; set; }
    public float AvarageSpeed { get; set; }
    public int DistanceDriven { get; set; }
    public float LongestDrift { get; set; }
    public float LongestJump { get; set; }
}