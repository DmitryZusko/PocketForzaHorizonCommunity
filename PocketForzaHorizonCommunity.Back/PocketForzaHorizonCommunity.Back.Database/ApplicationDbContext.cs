﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
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

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<TuneRating>()
            .HasOne(r => r.User)
            .WithMany(u => u.TunesRatings)
            .OnDelete(DeleteBehavior.Restrict);

        builder.Entity<TuneRating>()
            .HasOne(r => r.Entity)
            .WithMany(t => t.Ratings)
            .OnDelete(DeleteBehavior.Restrict);

        builder.Entity<DesignRating>()
            .HasOne(r => r.User)
            .WithMany(u => u.DesignsRatings)
            .OnDelete(DeleteBehavior.Restrict);

        builder.Entity<DesignRating>()
            .HasOne(r => r.Entity)
            .WithMany(r => r.Ratings)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
