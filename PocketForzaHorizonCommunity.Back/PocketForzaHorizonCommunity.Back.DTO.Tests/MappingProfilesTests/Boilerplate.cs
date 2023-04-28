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
    internal static Car GetCarSample()
    {
        return new Car
        {
            Id = new Guid(),
            Model = "RX-7",
            Year = 1997,
            Price = 35_000,
            ImagePath = "images\\rx7.jpg",
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

    internal static CreateCarRequest GetCreateCarRequestSample()
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

    internal static UpdateCarRequest GetUpdateCarRequestSample()
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

    internal static CampaignStatistics GetCampaignStatisticsSample()
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

    internal static GeneralStatistics GetGeneralStatisticsSample()
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

    internal static Design GetDesignSample()
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
            ThumbnailPath = "images\\thumbnail.png",
            Gallery = new List<GalleryImage>
            {
                new GalleryImage
                {
                    DesignOptionsId = design.Id,
                    ImagePath = "images\\rx7.jpg",
                },
                new GalleryImage
                {
                    DesignOptionsId = design.Id,
                    ImagePath = "images\\design_2.png",
                },
            },
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

    internal static Tune GetTuneSample()
    {
        var user = new ApplicationUser { UserName = "UserName" };
        var car = GetCarSample();

        var tune = new Tune
        {
            Title = "Title",
            ForzaShareCode = "888 555 222",
            Rating = 4.5,
            UserId = user.Id,
            User = user,
            CarId = car.Id,
            Car = car,
        };

        tune.TuneOptions = new TuneOptions
        {
            TuneId = tune.Id,
            EngineDescription = "Engine Description",
            Engine = Database.Enums.EngineType.RacingI6T,
            Aspiration = Database.Enums.AspirationType.TwinTurbo,
            Intake = Database.Enums.IntakeType.RaceIntake,
            Ignition = Database.Enums.IgnitionType.RaceIgnition,
            Displacement = Database.Enums.DisplacementType.SportEngineBlock,
            Exhaust = Database.Enums.ExhaustType.StreetExhaust,
            HandlingDescription = "Handling Description",
            Brakes = Database.Enums.BrakesType.StreetBrakes,
            Suspension = Database.Enums.SuspensionType.DriftSuspension,
            AntiRollBars = Database.Enums.AntiRollBarsType.RaceAntiRollBars,
            RollCage = Database.Enums.RollCageType.RaceChassisReinforcement,
            DrivetrainDescription = "Drivetrain Description",
            Clutch = Database.Enums.ClutchType.RaceClutch,
            Transmission = Database.Enums.TransmissionType.Race7Speed,
            Differential = Database.Enums.DifferentialType.DriftDifferential,
            TiersDescription = "Tiesr Description",
            Compound = Database.Enums.TiersCompoundType.VintageCompound,
            FrontTierWidth = Database.Enums.TiersWidthType.MM245,
            RearTierWidth = Database.Enums.TiersWidthType.MM285,
            FrontTrackWidth = Database.Enums.TrackWidthType.RaceTrackWidth,
            RearTrackWidth = Database.Enums.TrackWidthType.RaceTrackWidth,
        };

        return tune;
    }

    internal static CreateTuneRequest GetCreateTuneRequestSample()
    {
        var tune = GetTuneSample();
        var car = GetCarSample();

        return new CreateTuneRequest
        {
            Title = tune.Title,
            ForzaShareCode = tune.ForzaShareCode,
            AuthorId = tune.User.Id.ToString(),
            CarId = car.Id.ToString(),
            EngineDescription = tune.TuneOptions.EngineDescription,
            Engine = tune.TuneOptions.Engine,
            Aspiration = tune.TuneOptions.Aspiration,
            Intake = tune.TuneOptions.Intake,
            Ignition = tune.TuneOptions.Ignition,
            Displacement = tune.TuneOptions.Displacement,
            Exhaust = tune.TuneOptions.Exhaust,
            HandlingDescription = tune.TuneOptions.HandlingDescription,
            Brakes = tune.TuneOptions.Brakes,
            Suspension = tune.TuneOptions.Suspension,
            AntiRollBars = tune.TuneOptions.AntiRollBars,
            RollCage = tune.TuneOptions.RollCage,
            DrivetrainDescription = tune.TuneOptions.DrivetrainDescription,
            Clutch = tune.TuneOptions.Clutch,
            Transmission = tune.TuneOptions.Transmission,
            Differential = tune.TuneOptions.Differential,
            TiersDescription = tune.TuneOptions.TiersDescription,
            Compound = tune.TuneOptions.Compound,
            FrontTierWidth = tune.TuneOptions.FrontTierWidth,
            RearTierWidth = tune.TuneOptions.RearTierWidth,
            FrontTrackWidth = tune.TuneOptions.FrontTrackWidth,
            RearTrackWidth = tune.TuneOptions.RearTrackWidth,
        };
    }
}
