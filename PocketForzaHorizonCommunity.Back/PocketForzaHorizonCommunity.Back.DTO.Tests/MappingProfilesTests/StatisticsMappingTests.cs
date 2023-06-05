using AutoMapper;
using NUnit.Framework;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.StatisticsDtos;
using PocketForzaHorizonCommunity.Back.DTO.Mapper;

namespace PocketForzaHorizonCommunity.Back.DTO.Tests.MappingProfilesTests;

[TestFixture]
public class StatisticsMappingTests
{
    [Test]
    public void CampaingStatistics_To_CampaignStatisticsDto_Should_Map()
    {
        var statistics = Boilerplate.GetCampaignStatisticsSample();
        var mapper = new MapperConfiguration(cfg => cfg.AddProfile<CampaignStatisticsProfile>()).CreateMapper();
        var expected = MapCampaignStatisticsToDto(statistics);

        var actual = mapper.Map<CampaignStatistics, CampaignStatisticsDto>(statistics);

        Assert.IsTrue(CompareCampaignStatistics(expected, actual));
    }

    [Test]
    public void GeneralStatistics_To_GeneralStatisticsDto_Should_Map()
    {
        var statsstics = Boilerplate.GetGeneralStatisticsSample();
        var expected = MapGeneralStatisticsToDto(statsstics);
        var mapper = new MapperConfiguration(cfg => cfg.AddProfile<GeneralStatisticsProfile>()).CreateMapper();

        var actual = mapper.Map<GeneralStatistics, GeneralStatisticsDto>(statsstics);

        Assert.IsTrue(CompareGeneralstatistics(expected, actual));
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
            WeeklyChallengesCompleted = statistics.WeeklyChallengesCompleted,
            FavouriteCarModel = $"{statistics.Car.Manufacture.Name} {statistics.Car.Model} {statistics.Car.Year}",
        };
    }

    private bool CompareCampaignStatistics(CampaignStatisticsDto expected, CampaignStatisticsDto actual)
    {
        foreach (var property in expected.GetType().GetProperties())
        {
            if (!property.GetValue(actual).Equals(property.GetValue(expected))) return false;
        }

        return true;
    }

    private bool CompareGeneralstatistics(GeneralStatisticsDto expected, GeneralStatisticsDto actual)
    {
        foreach (var propery in expected.GetType().GetProperties())
        {
            if (!propery.GetValue(actual).Equals(propery.GetValue(expected))) return false;
        }

        return true;
    }
}
