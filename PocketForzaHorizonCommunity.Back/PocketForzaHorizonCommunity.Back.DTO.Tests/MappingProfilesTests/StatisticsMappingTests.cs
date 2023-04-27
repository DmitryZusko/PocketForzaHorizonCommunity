using AutoMapper;
using NUnit.Framework;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.StatisticsDtos;
using PocketForzaHorizonCommunity.Back.Services.Utilities;

namespace PocketForzaHorizonCommunity.Back.DTO.Tests.MappingProfilesTests;

[TestFixture]
public class StatisticsMappingTests
{
    [Test]
    public void CampaingStatistics_To_CampaignStatisticsDto_Should_Map(IMapper mapper, IStatisticsGenerator statisticsGenerator)
    {
        var user = new ApplicationUser();

        statisticsGenerator.GenerateStatistics(user);

        var expected = user.CampaignStatistics;

        var actual = mapper.Map<CampaignStatistics, CampaignStatisticsDto>(expected);

        Assert.IsTrue(CompairCampaignStatistics(expected, actual));

    }

    private bool CompairCampaignStatistics(CampaignStatistics expected, CampaignStatisticsDto actual)
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
}
