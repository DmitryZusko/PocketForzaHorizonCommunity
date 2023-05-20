using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities;

/// <summary>
/// As long as Forza Horizon 5 doesn't have any API that allows to get real user statistics information, I need to replace it
/// with some boilerplate data. This class populate all statistics types with random generated data. So, every new user will 
/// get statistics info only through this class and randomness will provide some sort of divercity.
/// </summary>
public class StatisticsGenerator : IStatisticsGenerator
{
    private readonly ICarRepository _carRepo;
    private readonly ICampaignStatisticsRepository _campaignStatsRepo;
    private readonly IGeneralStatisticsRepository _generalStatsRepo;
    private readonly IOnlineStatisticsRepository _onlineStatsRepo;
    private readonly IRecordsStatisticsRepository _recordsStatsRepo;
    private ApplicationUser _user { get; set; } = null!;

    private IList<Car> _selectedCars = new List<Car>();


    public StatisticsGenerator(ICarRepository carRepo, ICampaignStatisticsRepository campaignStatsRepo,
        IGeneralStatisticsRepository generalstatsRepo, IOnlineStatisticsRepository onlinestatsRepo,
        IRecordsStatisticsRepository recordsStatsRepo)
    {
        _carRepo = carRepo;
        _campaignStatsRepo = campaignStatsRepo;
        _generalStatsRepo = generalstatsRepo;
        _onlineStatsRepo = onlinestatsRepo;
        _recordsStatsRepo = recordsStatsRepo;
    }

    public async Task GenerateStatistics(ApplicationUser user)
    {
        _user = user;
        _user.OwnedCarsByUsers = await GenerateUserCarsAsync();

        user.GeneralStatistics = await GenerateGeneralStatistics();
        user.CampaignStatistics = await GenerateCampaignStatistics();
        user.OnlineStatistics = await GenerateOnlineStatistics();
        user.RecordsStatistics = await GenerateRecordsStatistics();

    }

    private async Task<List<OwnedCarsByUsers>> GenerateUserCarsAsync()
    {
        var rnd = new Random();
        var cars = await _carRepo.GetAll().ToListAsync();

        _selectedCars = cars.Skip(rnd.Next(0, cars.Count / 2)).Take(rnd.Next(1, cars.Count / 2)).ToList();

        var result = new List<OwnedCarsByUsers>();

        foreach (var car in _selectedCars)
        {
            result.Add(new OwnedCarsByUsers
            {
                Car = car,
                User = _user,
            });
        }

        return result;
    }

    private async Task<GeneralStatistics> GenerateGeneralStatistics()
    {
        var rnd = new Random();

        var statistics = new GeneralStatistics
        {
            UserId = _user.Id,
            User = _user,
            GarageValue = _selectedCars.Sum(c => c.Price),
            TimeDrivenInTicks = rnd.NextInt64(TimeSpan.TicksPerHour, 1000 * TimeSpan.TicksPerHour),
            TotalVictories = rnd.Next(10, 1000),
            TotalCleanLaps = rnd.Next(0, 10_000),
            CollisionsPerRace = rnd.Next(1, 50),
            DailyChallengesCompleted = rnd.Next(1, 1000),
            WeeklyChallengesComplited = rnd.Next(1, 1000),
            Car = _selectedCars[rnd.Next(0, _selectedCars.Count)],
        };

        statistics.TotalPodiums = statistics.TotalVictories + rnd.Next(10, 1000);
        statistics.FavouriteCarId = statistics.Car.Id;

        await _generalStatsRepo.CreateAsync(statistics);
        await _generalStatsRepo.SaveAsync();

        return statistics;
    }

    private async Task<CampaignStatistics> GenerateCampaignStatistics()
    {

        var rnd = new Random();

        var statistics = new CampaignStatistics
        {
            User = _user,
            TotalRaces = rnd.Next(0, 10_000),
            StoriesCompleted = rnd.Next(0, 65),
            StoryStarsEarned = rnd.Next(0, 195),
            HeadToHeadEntered = rnd.Next(0, 1000),
            ExhibitionsCompleted = rnd.Next(0, 84),
            SpeedTrapStars = rnd.Next(0, 93),
            SpeedZoneStars = rnd.Next(0, 78),
            DangerSignStars = rnd.Next(0, 60),
            DriftZoneStars = rnd.Next(0, 60),
            TrailblazerStars = rnd.Next(0, 30),
        };

        statistics.HeadToHeadWon = statistics.HeadToHeadEntered - rnd.Next(0, statistics.HeadToHeadEntered);

        await _campaignStatsRepo.CreateAsync(statistics);
        await _campaignStatsRepo.SaveAsync();

        return statistics;
    }

    private async Task<OnlineStatistics> GenerateOnlineStatistics()
    {
        var rnd = new Random();

        var statistics = new OnlineStatistics
        {
            User = _user,
            RecievedKudos = rnd.Next(0, 1000),
            GivenKudos = rnd.Next(0, 1000),
            FlagRushWon = rnd.Next(0, 1000),
            TeamFlagRushWon = rnd.Next(0, 1000),
            FlagsCaptured = rnd.Next(0, 1000),
            InfectedGamesWon = rnd.Next(0, 1000),
            TimesInfectedOthers = rnd.Next(0, 1000),
            TimesInfectedByOthers = rnd.Next(0, 1000),
            TeamKingGamesWon = rnd.Next(0, 1000),
            KingGamesWon = rnd.Next(0, 1000),
            RivalsBeaten = rnd.Next(0, 500),
            RivalsLapsCompleted = rnd.Next(0, 10_000),
        };

        statistics.ArcadeEventsCompleted = statistics.FlagRushWon + statistics.TeamFlagRushWon
            + statistics.InfectedGamesWon + statistics.TeamKingGamesWon + statistics.KingGamesWon;

        statistics.ArcadeEventsEntered = statistics.ArcadeEventsCompleted + rnd.Next(10, 1000);

        await _onlineStatsRepo.CreateAsync(statistics);
        await _onlineStatsRepo.SaveAsync();

        return statistics;
    }

    private async Task<RecordsStatistics> GenerateRecordsStatistics()
    {
        var rnd = new Random();

        var statistics = new RecordsStatistics
        {
            User = _user,
            HighestDriftScore = rnd.Next(100_000, 10_000_000),
            HighestDangerSignScore = rnd.NextDouble() * 1200 + 300,
            HighestSpeedTrapScore = rnd.NextDouble() * 500 + 100,
            HighestSpeedZoneScore = rnd.NextDouble() * 500 + 100,
            LongestSkillChainInTicks = rnd.NextInt64(TimeSpan.TicksPerMinute, TimeSpan.TicksPerHour),
            TopSpeed = rnd.NextDouble() * 350 + 250,
            DistanceDriven = rnd.Next(100, 1_000_000),
            LongestDrift = rnd.NextDouble() * 70_000 + 30_000,
        };

        statistics.AvarageSpeed = statistics.TopSpeed - rnd.Next(0, 100);
        statistics.LongestJump = statistics.HighestDangerSignScore;

        await _recordsStatsRepo.CreateAsync(statistics);
        await _recordsStatsRepo.SaveAsync();

        return statistics;

    }
}
