using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.Database.Enums.Roles;
using PocketForzaHorizonCommunity.Back.Database.Enums.SpareParts;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Database.Seeders.Models;
using System.Net.Http.Json;
using System.Security.Claims;

namespace PocketForzaHorizonCommunity.Back.Database.Seeders;

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
    private readonly IAlbumRepository _albumRepo;
    private readonly IConfiguration _config;

    public DevelopmentEnvironmentSeeder(
        RoleManager<ApplicationRole> roleManager,
        UserManager<ApplicationUser> userManager,
        ICarRepository carRepo,
        IManufactureRepository manufacturerRepo,
        ICarTypeRepository carTypeRepo,
        IDesignRepository designRepo,
        IGalleryRepository galleryRepo,
        ITuneRepository tuneRepo,
        IAlbumRepository albumRepo,
        IConfiguration configuration)
    {
        _roleManager = roleManager;
        _userManager = userManager;
        _carRepo = carRepo;
        _manufacturerRepo = manufacturerRepo;
        _carTypeRepo = carTypeRepo;
        _designRepo = designRepo;
        _galleryRepo = galleryRepo;
        _tuneRepo = tuneRepo;
        _albumRepo = albumRepo;
        _config = configuration;
    }

    public async Task Seed()
    {
        await SeedAlbums();
        await SeedRoles();
        await SeedUsers();
        await SeedManufacture();
        await SeedCarTypes();
        await SeedCars();
        await SeedDesigns();
        await SeedTunes();
    }

    private async Task SeedAlbums()
    {
        if (_albumRepo.GetAll().Any()) return;

        using var client = HttpClientFactory.Create();
        var content = JsonContent.Create(new
        {
            refresh_token = _config.GetValue<string>("ImgurApi:Refresh_Token"),
            client_id = _config.GetValue<string>("ImgurApi:Client_Id"),
            client_secret = _config.GetValue<string>("ImgurApi:Secret"),
            grant_type = "refresh_token"
        });

        var response = await client.PostAsync("https://api.imgur.com/oauth2/token", content);

        if (!response.IsSuccessStatusCode) throw new Exception($"{response.StatusCode} {response.ReasonPhrase}");

        var token = (await response.Content.ReadAsAsync<ImgurAuthResponse>()).Access_Token;

        client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

        //Hardcoding a thumbnail's id saves a lot of work, so be sure to upload image manualy to the imgur
        var albumTitle = "Cars";
        content = JsonContent.Create(new
        {
            Title = albumTitle,
            Description = "Album for car's thumbnail",
            Cover = "AuQUwch"
        });

        response = await client.PostAsync("https://api.imgur.com/3/album", content);

        if (!response.IsSuccessStatusCode) throw new Exception($"{response.StatusCode} {response.ReasonPhrase}");

        var albumId = (await response.Content.ReadAsAsync<ImgurResponseBase>()).Data.Id;
        await _albumRepo.CreateAsync(new Entities.ImageEntities.Album
        {
            ImgurId = albumId,
            Name = albumTitle,
        });

        //Hardcoding a thumbnail's id saves a lot of work, so be sure to upload image manualy to the imgur
        albumTitle = "Designs";
        content = JsonContent.Create(new
        {
            Title = albumTitle,
            Description = "Album for design's thumbnail",
            Cover = "YCHM0Cq"
        });

        response = await client.PostAsync("https://api.imgur.com/3/album", content);

        if (!response.IsSuccessStatusCode) throw new Exception($"{response.StatusCode} {response.ReasonPhrase}");

        albumId = (await response.Content.ReadAsAsync<ImgurResponseBase>()).Data.Id;
        await _albumRepo.CreateAsync(new Entities.ImageEntities.Album
        {
            ImgurId = albumId,
            Name = albumTitle,
        });

        await _albumRepo.SaveAsync();
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
        var user = await _userManager.FindByEmailAsync("admin@g.com");

        if (user != null) return;
        user = new ApplicationUser
        {
            Email = "admin@g.com",
            UserName = "Admin",
        };

        await _userManager.CreateAsync(user, "Admin!22");

        if (!await _userManager.IsInRoleAsync(user, RoleType.ADMIN))
        {
            await _userManager.AddToRoleAsync(user, RoleType.ADMIN);
        }


        user = await _userManager.FindByEmailAsync("user@g.com");

        if (user != null) return;

        user = new ApplicationUser
        {
            Email = "user@g.com",
            UserName = "User",
        };

        await _userManager.CreateAsync(user, "User!222");
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


        var mazda = new Car
        {
            Model = "Rx-7",
            Year = 1997,
            Price = 35_000,
            ManufactureId = _manufacturerRepo.GetAll().Where(t => t.Name == "Mazda").FirstOrDefault().Id,
            CarTypeId = _carTypeRepo.GetAll().Where(m => m.Name == "Retro Sport Car").FirstOrDefault().Id,
        };

        var skyline = new Car
        {
            Model = "Skyline R34",
            Year = 1997,
            Price = 35_000,
            ManufactureId = _manufacturerRepo.GetAll().Where(t => t.Name == "Nissan").FirstOrDefault().Id,
            CarTypeId = _carTypeRepo.GetAll().Where(m => m.Name == "Retro Sport Car").FirstOrDefault().Id,
        };

        var golf = new Car
        {
            Model = "Golf R34",
            Year = 1997,
            Price = 30_000,
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
            UserId = (await _userManager.FindByEmailAsync("googlkek@gmail.com")).Id,
            CarId = _carRepo.GetAll().Where(c => c.Model == "Rx-7").FirstOrDefault().Id,
        };

        await _designRepo.CreateAsync(mazdaDesign);

        mazdaDesign.DesignOptions = new DesignOptions
        {
            DesignId = mazdaDesign.Id,
            Description = "My Rx-7 design!",
        };

        await _designRepo.SaveAsync();

        await _galleryRepo.CreateAsync(new GalleryImage
        {
            DesignOptionsId = mazdaDesign.DesignOptions.DesignId,
            ImagePath = "",
        });

        await _galleryRepo.SaveAsync();

        var skylineDesign = new Design
        {
            Title = "Skyline Design",
            ForzaShareCode = "888 555 222",
            UserId = (await _userManager.FindByEmailAsync("googlkek@gmail.com")).Id,
            CarId = _carRepo.GetAll().Where(c => c.Model == "Skyline R34").FirstOrDefault().Id,
        };

        await _designRepo.CreateAsync(skylineDesign);

        skylineDesign.DesignOptions = new DesignOptions
        {
            DesignId = skylineDesign.Id,
            Description = "My Skyline R34 design!",
        };

        await _designRepo.SaveAsync();

        await _galleryRepo.CreateAsync(new GalleryImage
        {
            DesignOptionsId = skylineDesign.DesignOptions.DesignId,
            ImagePath = "",
        });

        await _galleryRepo.CreateAsync(new GalleryImage
        {
            DesignOptionsId = skylineDesign.DesignOptions.DesignId,
            ImagePath = "",
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
