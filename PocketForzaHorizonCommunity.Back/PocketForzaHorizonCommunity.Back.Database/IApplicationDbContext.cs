using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;

namespace PocketForzaHorizonCommunity.Back.Database
{
    public interface IApplicationDbContext
    {
        DbSet<CampaignStatistics> CampaignStatistics { get; }
        DbSet<Car> Cars { get; }
        DbSet<Design> Designs { get; }
        DbSet<DesignOptions> DesignsOptions { get; }
        DbSet<GeneralStatistics> GeneralStatistics { get; }
        DbSet<Manufacture> Manufactures { get; }
        DbSet<OnlineStatistics> OnlineStatistics { get; }
        DbSet<RecordStatistics> RecordStatistics { get; }
        DbSet<Tune> Tunes { get; }
        DbSet<TuneOptions> TunesOptions { get; }
        DbSet<CarType> Types { get; }
    }
}