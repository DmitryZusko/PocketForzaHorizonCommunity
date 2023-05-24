using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;
using PocketForzaHorizonCommunity.Back.Database.Enums.SpareParts;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;

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
            UserId = user.Id,
            User = user,
            CarId = car.Id,
            Car = car,
        };

        tune.TuneOptions = new TuneOptions
        {
            TuneId = tune.Id,
            EngineDescription = "Engine Description",
            Engine = EngineType.RacingI6T,
            Aspiration = AspirationType.TwinTurbo,
            Intake = IntakeType.RaceIntake,
            Ignition = IgnitionType.RaceIgnition,
            Displacement = DisplacementType.SportEngineBlock,
            Exhaust = ExhaustType.StreetExhaust,
            HandlingDescription = "Handling Description",
            Brakes = BrakesType.StreetBrakes,
            Suspension = SuspensionType.DriftSuspension,
            AntiRollBars = AntiRollBarsType.RaceAntiRollBars,
            RollCage = RollCageType.RaceChassisReinforcement,
            DrivetrainDescription = "Drivetrain Description",
            Clutch = ClutchType.RaceClutch,
            Transmission = TransmissionType.Race7Speed,
            Differential = DifferentialType.DriftDifferential,
            TiresDescription = "Tiesr Description",
            Compound = TiresCompoundType.VintageCompound,
            FrontTireWidth = TiresWidthType.MM245,
            RearTireWidth = TiresWidthType.MM285,
            FrontTrackWidth = TrackWidthType.RaceTrackWidth,
            RearTrackWidth = TrackWidthType.RaceTrackWidth,
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
            TiresDescription = tune.TuneOptions.TiresDescription,
            Compound = tune.TuneOptions.Compound,
            FrontTireWidth = tune.TuneOptions.FrontTireWidth,
            RearTireWidth = tune.TuneOptions.RearTireWidth,
            FrontTrackWidth = tune.TuneOptions.FrontTrackWidth,
            RearTrackWidth = tune.TuneOptions.RearTrackWidth,
        };
    }
}
