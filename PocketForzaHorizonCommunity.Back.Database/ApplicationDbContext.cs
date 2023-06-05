using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.ImageEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;

namespace PocketForzaHorizonCommunity.Back.Database;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Car> Cars => Set<Car>();
    public DbSet<Manufacture> Manufactures => Set<Manufacture>();
    public DbSet<CarType> Types => Set<CarType>();
    public DbSet<Design> Designs => Set<Design>();
    public DbSet<DesignOptions> DesignsOptions => Set<DesignOptions>();
    public DbSet<DesignRating> DesignsRating => Set<DesignRating>();
    public DbSet<Tune> Tunes => Set<Tune>();
    public DbSet<TuneOptions> TunesOptions => Set<TuneOptions>();
    public DbSet<TuneRating> TunesRating => Set<TuneRating>();
    public DbSet<CampaignStatistics> CampaignStatistics => Set<CampaignStatistics>();
    public DbSet<GeneralStatistics> GeneralStatistics => Set<GeneralStatistics>();
    public DbSet<OnlineStatistics> OnlineStatistics => Set<OnlineStatistics>();
    public DbSet<RecordsStatistics> RecordsStatistics => Set<RecordsStatistics>();
    public DbSet<Album> Albums => Set<Album>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<ApplicationUser>()
            .HasMany(u => u.Tunes)
            .WithOne(t => t.User)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.SetNull);

        builder.Entity<ApplicationUser>()
            .HasMany(u => u.Designs)
            .WithOne(t => t.User)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.SetNull);
    }
}
