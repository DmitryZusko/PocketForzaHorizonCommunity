using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

namespace PocketForzaHorizonCommunity.Back.DTO.Tests.MappingProfilesTests;
/// <summary>
/// A bunch of methods that return a boilerplate instances for different test cases.
/// </summary>
internal static class Boilerplate
{
    public static Car GetCarSample()
    {
        return new Car
        {
            Id = new Guid(),
            Model = "RX-7",
            Year = 1997,
            Manufacture = new Manufacture
            {
                Name = "Mazda",
                Country = "Japan",
            },
            CarType = new CarType
            {
                Name = "Retro sport Cars",
            }

        };
    }

    public static CreateCarRequest GetCreateCarRequestSample()
    {

        var car = GetCarSample();
        return new CreateCarRequest
        {
            Model = car.Model,
            Year = car.Year,
            Price = car.Price,
            ManufactureId = car.ManufactureId.ToString(),
            CarTypeId = car.CarTypeId.ToString(),
        };
    }

    public static UpdateCarRequest GetUpdateCarRequestSample()
    {

        var car = GetCarSample();
        return new UpdateCarRequest
        {
            Id = car.Id.ToString(),
            Model = car.Model,
            Year = car.Year,
            Price = car.Price,
            ManufactureId = car.ManufactureId.ToString(),
            CarTypeId = car.CarTypeId.ToString(),
        };
    }

    public static CampaignStatistics GetCampaignStatisticsSample()
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

    public static GeneralStatistics GetGeneralStatisticsSample()
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
            Car = GetCarSample(),
        };
    }

    public static Design GetDesignSample()
    {

        var car = GetCarSample();
        var user = new ApplicationUser { UserName = "User000" };
        var design = new Design
        {
            Id = new Guid(),
            Title = "Design",
            ForzaShareCode = "888 555 222",
            Rating = 4.5,
            UserId = new Guid(),
            User = user,
            CarId = car.Id,
            Car = car,
        };

        design.DesignOptions = new DesignOptions
        {
            DesignId = design.Id,
            Design = design,
            Description = "Description",
        };

        return design;
    }

    internal static CreateDesignRequest GetCreateDesignRequestSample()
    {
        var design = GetDesignSample();

        return new CreateDesignRequest
        {
            Title = design.Title,
            ForzaShareCode = design.ForzaShareCode,
            AuthorId = design.UserId.ToString(),
            CarId = design.CarId.ToString(),
            Description = design.DesignOptions.Description,
        };
    }
}
