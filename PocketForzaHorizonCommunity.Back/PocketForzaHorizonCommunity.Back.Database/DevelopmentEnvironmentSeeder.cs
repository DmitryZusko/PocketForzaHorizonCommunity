using Microsoft.AspNetCore.Identity;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.Database.Enums.Roles;
using PocketForzaHorizonCommunity.Back.Database.Enums.SpareParts;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using System.Security.Claims;

namespace PocketForzaHorizonCommunity.Back.Database;

public class DevelopmentEnvironmentSeeder
{
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ICarRepository _carRepo;
    private readonly IManufactureRepository _manufacturerRepo;
    private readonly ICarTypeRepository _carTypeRepo;
    private readonly IDesignRepository _designRepo;
    private readonly IGalleryRepository _galleryRepo;
    private readonly ITuneRepository _tuneRepo;

    public DevelopmentEnvironmentSeeder(
        RoleManager<ApplicationRole> roleManager,
        UserManager<ApplicationUser> userManager,
        ICarRepository carRepo,
        IManufactureRepository manufacturerRepo,
        ICarTypeRepository carTypeRepo,
        IDesignRepository designRepo,
        IGalleryRepository galleryRepo,
        ITuneRepository tuneRepo)
    {
        _roleManager = roleManager;
        _userManager = userManager;
        _carRepo = carRepo;
        _manufacturerRepo = manufacturerRepo;
        _carTypeRepo = carTypeRepo;
        _designRepo = designRepo;
        _galleryRepo = galleryRepo;
        _tuneRepo = tuneRepo;
    }

    public async Task Seed()
    {
        await SeedRoles();
        //await SeedUsers();
        await SeedManufacture();
        await SeedCarTypes();
        await SeedCars();
        await SeedDesigns();
        await SeedTunes();
    }

    private async Task SeedRoles()
    {
        if (!await _roleManager.RoleExistsAsync(RoleType.ADMIN))
        {
            var adminRole = new ApplicationRole { Name = RoleType.ADMIN };
            await _roleManager.CreateAsync(adminRole);

            adminRole = await _roleManager.FindByNameAsync(RoleType.ADMIN);

            await _roleManager.AddClaimAsync(adminRole, new Claim(ClaimType.FUNCTION, ClaimValue.ADMIN));
        }

        if (!await _roleManager.RoleExistsAsync(RoleType.CREATOR))
        {
            var creatorRole = new ApplicationRole { Name = RoleType.CREATOR };
            await _roleManager.CreateAsync(creatorRole);

            creatorRole = await _roleManager.FindByNameAsync(RoleType.CREATOR);

            await _roleManager.AddClaimAsync(creatorRole, new Claim(ClaimType.FUNCTION, ClaimValue.CREATOR));
        }

        if (!await _roleManager.RoleExistsAsync(RoleType.USER))
        {
            var userRole = new ApplicationRole { Name = RoleType.USER };
            await _roleManager.CreateAsync(userRole);

            userRole = await _roleManager.FindByNameAsync(RoleType.USER);

            await _roleManager.AddClaimAsync(userRole, new Claim(ClaimType.USER, ClaimValue.USER));
        }
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

        if (!await _userManager.IsInRoleAsync(user, RoleType.ADMIN))
        {
            await _userManager.AddToRoleAsync(user, RoleType.ADMIN);
        }


        user = await _userManager.FindByEmailAsync("elxf123@gmail.com");

        if (user != null) return;

        user = new ApplicationUser
        {
            Email = "elxf123@gmail.com",
            UserName = "Elxf123",
        };

        await _userManager.CreateAsync(user, "Qwerty123!");
        if (!await _userManager.IsInRoleAsync(user, RoleType.USER))
        {
            await _userManager.AddToRoleAsync(user, RoleType.USER);
        }
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
            ManufactureId = _manufacturerRepo.GetAll().Where(t => t.Name == "Mazda").FirstOrDefault().Id,
            CarTypeId = _carTypeRepo.GetAll().Where(m => m.Name == "Retro Sport Car").FirstOrDefault().Id,
        };

        var skyline = new Car
        {
            Model = "Skyline R34",
            Year = 1997,
            Price = 35_000,
            ImagePath = skylineFullPath,
            ManufactureId = _manufacturerRepo.GetAll().Where(t => t.Name == "Nissan").FirstOrDefault().Id,
            CarTypeId = _carTypeRepo.GetAll().Where(m => m.Name == "Retro Sport Car").FirstOrDefault().Id,
        };

        var golf = new Car
        {
            Model = "Golf R34",
            Year = 1997,
            Price = 30_000,
            ImagePath = golfFullPath,
            ManufactureId = _manufacturerRepo.GetAll().Where(t => t.Name == "Volkswagen").FirstOrDefault().Id,
            CarTypeId = _carTypeRepo.GetAll().Where(m => m.Name == "Hot Hatch").FirstOrDefault().Id,
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
        if (_tuneRepo.GetAll().Any()) return;
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
            Engine = EngineType.RacingV8,
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
            TiresDescription = "Tires Description",
            Compound = TiresCompoundType.VintageCompound,
            FrontTireWidth = TiresWidthType.MM245,
            RearTireWidth = TiresWidthType.MM285,
            FrontTrackWidth = TrackWidthType.RaceTrackWidth,
            RearTrackWidth = TrackWidthType.RaceTrackWidth,
        };

        await _tuneRepo.SaveAsync();
    }
}
