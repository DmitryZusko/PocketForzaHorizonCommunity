using Microsoft.AspNetCore.Identity;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;
using System.ComponentModel.DataAnnotations;

namespace PocketForzaHorizonCommunity.Back.Database.Entities;

public class ApplicationUser : IdentityUser<Guid>
{
    [Required]
    public GeneralStatistics GeneralStatistics { get; set; } = null!;
    [Required]
    public CampaignStatistics CampaignStatistics { get; set; } = null!;
    [Required]
    public OnlineStatistics OnlineStatistics { get; set; } = null!;
    [Required]
    public RecordsStatistics RecordsStatistics { get; set; } = null!;
    public ICollection<Tune> Tunes { get; set; } = new List<Tune>();
    public ICollection<Design> Designs { get; set; } = new List<Design>();
    public ICollection<OwnedCarsByUsers> OwnedCarsByUser { get; set; } = new List<OwnedCarsByUsers>();
    public List<TuneRating> TunesRatings { get; set; } = new List<TuneRating>();
    public List<DesignRating> DesignsRatings { get; set; } = new List<DesignRating>();
}
