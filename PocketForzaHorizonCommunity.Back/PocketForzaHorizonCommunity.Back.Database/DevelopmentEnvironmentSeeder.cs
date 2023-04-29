using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Repos;

namespace PocketForzaHorizonCommunity.Back.Database;

public class DevelopmentEnvironmentSeeder
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly CarRepository _carRepo;
    private readonly ManufactureRepository _manufacturerRepo;
    private readonly CarTypeRepository _carTypeRepo;
    private readonly DesignRepository _designRepo;
    private readonly GalleryRepository _galleryRepo;
    private readonly TuneRepository _tuneRepo;

    public DevelopmentEnvironmentSeeder(IServiceProvider serviceProvider)
    {
        _userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();
        _carRepo = serviceProvider.GetService<CarRepository>();
        _manufacturerRepo = serviceProvider.GetService<ManufactureRepository>();
        _carTypeRepo = serviceProvider.GetService<CarTypeRepository>();
        _designRepo = serviceProvider.GetService<DesignRepository>();
        _tuneRepo = serviceProvider.GetService<TuneRepository>();
    }

    public async Task Seed()
    {
        await SeedUsers();
        await SeedManufacture();
        await SeedCarTypes();
        await SeedCars();
        await SeedDesigns();
        await SeedTunes();
    }

    private async Task SeedUsers()
    {
        var user = await _userManager.FindByEmailAsync("googlkek@gmail.com");

        if (user != null) return;
        user = new ApplicationUser
        {
            Email = "googlkek@gmail.com",
            UserName = "GooglKek",
        };

        await _userManager.CreateAsync(user, "Qwerty123!");


        user = await _userManager.FindByEmailAsync("elxf123@gmail.com");

        if (user != null) return;

        user = new ApplicationUser
        {
            Email = "elxf123@gmail.com",
            UserName = "Elxf123",
        };

        await _userManager.CreateAsync(user, "Qwerty123!");
    }

    private async Task SeedManufacture()
    {
        if (_manufacturerRepo.GetAll().Any()) return;

        await _manufacturerRepo.CreateAsync(new Manufacture
        {
            Name = "Mazda",
            Country = "Japan",
        });

        await _manufacturerRepo.CreateAsync(new Manufacture
        {
            Name = "Nissan",
            Country = "Japan",
        });

        await _manufacturerRepo.CreateAsync(new Manufacture
        {
            Name = "Volkswagen",
            Country = "Germany",
        });

        await _manufacturerRepo.SaveAsync();
    }

    private async Task SeedCarTypes()
    {
        if (_carTypeRepo.GetAll().Any()) return;

        await _carTypeRepo.CreateAsync(new CarType
        {
            Name = "Retro Sport Car",
        });

        await _carTypeRepo.CreateAsync(new CarType
        {
            Name = "Hot Hatch",
        });

        await _carTypeRepo.SaveAsync();
    }

    private async Task SeedCars()
    {
        if (_carRepo.GetAll().Any()) return;

        var applicationDirectory = AppDomain.CurrentDomain.BaseDirectory;

        var mazdaImage = Path.Combine(applicationDirectory, @"..\..\..\..\envseeder\cars\rx7.jpg");
        var skylineImage = Path.Combine(applicationDirectory, @"..\..\..\..\envseeder\cars\skyliner34.jpg");
        var golfImage = Path.Combine(applicationDirectory, @"..\..\..\..\envseeder\cars\golfr34.jpg");
        var mazdaFullPath = Path.GetFullPath(mazdaImage);
        var skylineFullPath = Path.GetFullPath(skylineImage);
        var golfFullPath = Path.GetFullPath(golfImage);


        var mazda = new Car
        {
            Model = "Rx-7",
            Year = 1997,
            Price = 35_000,
            ImagePath = mazdaFullPath,
            ManufactureId = _manufacturerRepo.GetAll().Where(t => t.Name == "Retro Sport Car").FirstOrDefault().Id,
            CarTypeId = _carTypeRepo.GetAll().Where(m => m.Name == "Mazda").FirstOrDefault().Id,
        };

        var skyline = new Car
        {
            Model = "Skyline R34",
            Year = 1997,
            Price = 35_000,
            ImagePath = skylineFullPath,
            ManufactureId = _manufacturerRepo.GetAll().Where(t => t.Name == "Retro Sport Car").FirstOrDefault().Id,
            CarTypeId = _carTypeRepo.GetAll().Where(m => m.Name == "Nissan").FirstOrDefault().Id,
        };

        var golf = new Car
        {
            Model = "Golf R34",
            Year = 1997,
            Price = 30_000,
            ImagePath = golfFullPath,
            ManufactureId = _manufacturerRepo.GetAll().Where(t => t.Name == "Hot Hatch").FirstOrDefault().Id,
            CarTypeId = _carTypeRepo.GetAll().Where(m => m.Name == "Volkswagen").FirstOrDefault().Id,
        };

        await _carRepo.CreateAsync(mazda);
        await _carRepo.CreateAsync(skyline);
        await _carRepo.CreateAsync(golf);
        await _carRepo.SaveAsync();

    }

    private async Task SeedDesigns()
    {
        if (_designRepo.GetAll().Any()) return;

        var mazdaDesign = new Design
        {
            Title = "Rx-7 Design",
            ForzaShareCode = "888 555 222",
            Rating = 5.0,
            UserId = (await _userManager.FindByEmailAsync("googlkek@gmail.com")).Id,
            CarId = _carRepo.GetAll().Where(c => c.Model == "Rx-7").FirstOrDefault().Id,
        };

        await _designRepo.CreateAsync(mazdaDesign);

        var applicationDirectory = AppDomain.CurrentDomain.BaseDirectory;

        var thumbnail = Path.Combine(applicationDirectory, @"..\..\..\..\envseeder\designs\rx_thumbnail.png");
        var designImage = Path.Combine(applicationDirectory, @"..\..\..\..\envseeder\designs\rx_design.png");
        var thumbPath = Path.GetFullPath(thumbnail);
        var designPath = Path.GetFullPath(designImage);


        mazdaDesign.DesignOptions = new DesignOptions
        {
            DesignId = mazdaDesign.Id,
            ThumbnailPath = thumbPath,
            Description = "My Rx-7 design!",
        };

        await _designRepo.SaveAsync();

        await _galleryRepo.CreateAsync(new GalleryImage
        {
            DesignOptionsId = mazdaDesign.DesignOptions.DesignId,
            ImagePath = designPath,
        });

        await _galleryRepo.SaveAsync();

        var skylineDesign = new Design
        {
            Title = "Skyline Design",
            ForzaShareCode = "888 555 222",
            Rating = 5.0,
            UserId = (await _userManager.FindByEmailAsync("googlkek@gmail.com")).Id,
            CarId = _carRepo.GetAll().Where(c => c.Model == "Skyline R34").FirstOrDefault().Id,
        };

        await _designRepo.CreateAsync(skylineDesign);

        thumbnail = Path.Combine(applicationDirectory, @"..\..\..\..\envseeder\designs\skyline_thumbnail.png");
        designImage = Path.Combine(applicationDirectory, @"..\..\..\..\envseeder\designs\skyline_design_1.png");
        var designImageMore = Path.Combine(applicationDirectory, @"..\..\..\..\envseeder\designs\skyline_design_2.png");
        thumbPath = Path.GetFullPath(thumbnail);
        designPath = Path.GetFullPath(designImage);
        var designPathMore = Path.GetFullPath(designImageMore);

        skylineDesign.DesignOptions = new DesignOptions
        {
            DesignId = skylineDesign.Id,
            ThumbnailPath = thumbPath,
            Description = "My Skyline R34 design!",
        };

        await _designRepo.SaveAsync();

        await _galleryRepo.CreateAsync(new GalleryImage
        {
            DesignOptionsId = skylineDesign.DesignOptions.DesignId,
            ImagePath = designPath,
        });

        await _galleryRepo.CreateAsync(new GalleryImage
        {
            DesignOptionsId = skylineDesign.DesignOptions.DesignId,
            ImagePath = designPathMore,
        });

        await _galleryRepo.SaveAsync();
    }

    private async Task SeedTunes()
    {
        var tune = new Tune
        {
            Title = "Rx-7 tune",
            ForzaShareCode = "888 555 222",
            Rating = 4.5,
            UserId = (await _userManager.FindByEmailAsync("googlkek@gmail.com")).Id,
            CarId = _carRepo.GetAll().Where(c => c.Model == "Rx-7").FirstOrDefault().Id,
        };

        await _tuneRepo.CreateAsync(tune);
        await _tuneRepo.SaveAsync();

        tune.TuneOptions = new TuneOptions
        {
            TuneId = tune.Id,
            EngineDescription = "Engine Description",
            Engine = Enums.EngineType.RacingV8,
            Aspiration = Enums.AspirationType.TwinTurbo,
            Intake = Enums.IntakeType.RaceIntake,
            Ignition = Enums.IgnitionType.RaceIgnition,
            Displacement = Enums.DisplacementType.SportEngineBlock,
            Exhaust = Enums.ExhaustType.StreetExhaust,
            HandlingDescription = "Handling Description",
            Brakes = Enums.BrakesType.StreetBrakes,
            Suspension = Enums.SuspensionType.DriftSuspension,
            AntiRollBars = Enums.AntiRollBarsType.RaceAntiRollBars,
            RollCage = Enums.RollCageType.RaceChassisReinforcement,
            DrivetrainDescription = "Drivetrain Description",
            Clutch = Enums.ClutchType.RaceClutch,
            Transmission = Enums.TransmissionType.Race7Speed,
            Differential = Enums.DifferentialType.DriftDifferential,
            TiersDescription = "Tiesr Description",
            Compound = Enums.TiersCompoundType.VintageCompound,
            FrontTierWidth = Enums.TiersWidthType.MM245,
            RearTierWidth = Enums.TiersWidthType.MM285,
            FrontTrackWidth = Enums.TrackWidthType.RaceTrackWidth,
            RearTrackWidth = Enums.TrackWidthType.RaceTrackWidth,
        };

        await _tuneRepo.SaveAsync();
    }
}
