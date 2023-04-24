﻿using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;

public class CampaignStatistics
{
    [Key]
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;

    [Required]
    public int TotalRaces { get; set; }
    [Required]
    public int StoriesCompleted { get; set; }
    [Required]
    public int StoryStarsEarned { get; set; }
    [Required]
    public int HeadToHeadEntered { get; set; }
    [Required]
    public int HeadToHeadWon { get; set; }
    [Required]
    public int ExhibitionsCompleted { get; set; }
    [Required]
    public int SpeedTrapStars { get; set; }
    [Required]
    public int SpeedZoneStars { get; set; }
    [Required]
    public int DangerSignStars { get; set; }
    [Required]
    public int DriftZoneStars { get; set; }
    [Required]
    public int TrailblazerStars { get; set; }
}
