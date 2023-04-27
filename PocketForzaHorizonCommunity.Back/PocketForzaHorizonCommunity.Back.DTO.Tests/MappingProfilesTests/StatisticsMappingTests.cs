using AutoMapper;
using NUnit.Framework;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.StatisticsDtos;
using PocketForzaHorizonCommunity.Back.DTO.Mapper;

namespace PocketForzaHorizonCommunity.Back.DTO.Tests.MappingProfilesTests;

[TestFixture]
public class StatisticsMappingTests
{
    [Test]
    public void CampaingStatistics_To_CampaignStatisticsDto_Should_Map()
    {
        var statistics = GetCampaignStatisticsSample();
        var mapper = new MapperConfiguration(cfg => cfg.AddProfile<CampaignStatisticsProfile>()).CreateMapper();
        var expected = MapCampaignStatisticsToDto(statistics);

        var actual = mapper.Map<CampaignStatistics, CampaignStatisticsDto>(statistics);

        Assert.IsTrue(CompareCampaignStatistics(expected, actual));
    }

    [Test]
    public void GeneralStatistics_To_GeneralStatisticsDto_Should_Map()
    {
        var statsstics = GetGeneralStatisticsSample();
        var expected = MapGeneralStatisticsToDto(statsstics);
        var mapper = new MapperConfiguration(cfg => cfg.AddProfile<GeneralStatisticsProfile>()).CreateMapper();

        var actual = mapper.Map<GeneralStatistics, GeneralStatisticsDto>(statsstics);

        Assert.IsTrue(CompareGeneralstatistics(expected, actual));
    }

    private CampaignStatistics GetCampaignStatisticsSample()
    {
        return new CampaignStatistics
        {
            TotalRaces = 10,
            StoriesCompleted = 10,
            StoryStarsEarned = 10,
            HeadToHeadEntered = 10,
            HeadToHeadWon = 10,
            ExhibitionsCompleted = 10,
            SpeedTrapStars = 10,
            SpeedZoneStars = 10,
            DangerSignStars = 10,
            DriftZoneStars = 10,
            TrailblazerStars = 10,
        };
    }

    private GeneralStatistics GetGeneralStatisticsSample()
    {
        return new GeneralStatistics
        {
            GarageValue = 10,
            TimeDrivenInTicks = 10_000_000_000,
            TotalVictories = 10,
            TotalPodiums = 10,
            TotalCleanLaps = 10,
            CollisionsPerRace = 10,
            DailyChallengesCompleted = 10,
            WeeklyChallengesComplited = 10,
            Car = new Database.Entities.CarEntities.Car
            {
                Model = "RX-7",
                Year = 1997,
                Manufacture = new Database.Entities.CarEntities.Manufacture
                {
                    Name = "Mazda",
                    Country = "Japan",
                }

            }
        };
    }

    private CampaignStatisticsDto MapCampaignStatisticsToDto(CampaignStatistics statistics)
    {
        return new CampaignStatisticsDto
        {
            TotalRaces = statistics.TotalRaces,
            StoriesCompleted = statistics.StoriesCompleted,
            StoryStarsEarned = statistics.StoryStarsEarned,
            HeadToHeadEntered = statistics.HeadToHeadEntered,
            HeadToHeadWon = statistics.HeadToHeadWon,
            ExhibitionsCompleted = statistics.ExhibitionsCompleted,
            SpeedTrapStars = statistics.SpeedTrapStars,
            SpeedZoneStars = statistics.SpeedZoneStars,
            DangerSignStars = statistics.DangerSignStars,
            DriftZoneStars = statistics.DriftZoneStars,
            TrailblazerStars = statistics.TrailblazerStars,
        };
    }

    private GeneralStatisticsDto MapGeneralStatisticsToDto(GeneralStatistics statistics)
    {
        return new GeneralStatisticsDto
        {
            GarageValue = statistics.GarageValue,
            TimeDriven = TimeSpan.FromTicks(statistics.TimeDrivenInTicks),
            TotalVictories = statistics.TotalVictories,
            TotalPodiums = statistics.TotalPodiums,
            TotalCleanLaps = statistics.TotalCleanLaps,
            CollisionsPerRace = statistics.CollisionsPerRace,
            DailyChallengesCompleted = statistics.DailyChallengesCompleted,
            WeeklyChallengesComplited = statistics.WeeklyChallengesComplited,
            FavouriteCarModel = $"{statistics.Car.Manufacture.Name} {statistics.Car.Model} {statistics.Car.Year}",
        };
    }

    private bool CompareCampaignStatistics(CampaignStatisticsDto expected, CampaignStatisticsDto actual)
    {

        if (expected.TotalRaces != actual.TotalRaces) return false;
        if (expected.StoriesCompleted != actual.StoriesCompleted) return false;
        if (expected.StoryStarsEarned != actual.StoryStarsEarned) return false;
        if (expected.HeadToHeadEntered != actual.HeadToHeadEntered) return false;
        if (expected.HeadToHeadWon != actual.HeadToHeadWon) return false;
        if (expected.ExhibitionsCompleted != actual.ExhibitionsCompleted) return false;
        if (expected.SpeedTrapStars != actual.SpeedTrapStars) return false;
        if (expected.SpeedZoneStars != actual.SpeedZoneStars) return false;
        if (expected.DangerSignStars != actual.DangerSignStars) return false;
        if (expected.DriftZoneStars != actual.DriftZoneStars) return false;
        if (expected.TrailblazerStars != actual.TrailblazerStars) return false;

        return true;
    }

    private bool CompareGeneralstatistics(GeneralStatisticsDto expected, GeneralStatisticsDto actual)
    {
        if (expected.GarageValue != actual.GarageValue) return false;
        if (expected.TimeDriven != actual.TimeDriven) return false;
        if (expected.TotalVictories != actual.TotalVictories) return false;
        if (expected.TotalPodiums != actual.TotalPodiums) return false;
        if (expected.TotalCleanLaps != actual.TotalCleanLaps) return false;
        if (expected.CollisionsPerRace != actual.CollisionsPerRace) return false;
        if (expected.DailyChallengesCompleted != actual.DailyChallengesCompleted) return false;
        if (expected.WeeklyChallengesComplited != actual.WeeklyChallengesComplited) return false;
        if (expected.FavouriteCarModel != actual.FavouriteCarModel) return false;

        return true;
    }
}
