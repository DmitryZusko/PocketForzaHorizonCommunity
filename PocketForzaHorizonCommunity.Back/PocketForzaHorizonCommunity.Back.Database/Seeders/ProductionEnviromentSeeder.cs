using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Enums.Roles;
using PocketForzaHorizonCommunity.Back.Database.Models.ImgurModels;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using System.Net.Http.Json;
using System.Security.Claims;

namespace PocketForzaHorizonCommunity.Back.Database.Seeders;

public class ProductionEnviromentSeeder
{
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IAlbumRepository _albumRepo;
    private readonly IConfiguration _config;

    public ProductionEnviromentSeeder(RoleManager<ApplicationRole> roleManager,
        UserManager<ApplicationUser> userManager, IAlbumRepository albumRepo,
        IConfiguration configuration)
    {
        _roleManager = roleManager;
        _userManager = userManager;
        _albumRepo = albumRepo;
        _config = configuration;
    }

    public async Task Seed()
    {
        await SeedAlbums();
        await SeedRoles();
        await SeedUsers();
    }

    public async Task SeedAlbums()
    {
        var albums = _albumRepo.GetAll().ToList();

        if (albums.Count >= 2) return;

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

        var carAlbumTitle = "Cars";
        var designAlbumName = "Designs";

        if (!albums.Any(x => x.Name == carAlbumTitle))
        {
            //Hardcoding a thumbnail's id saves a lot of work, so be sure to upload image manualy to the imgur
            content = JsonContent.Create(new
            {
                Title = carAlbumTitle,
                Description = "Album for car's thumbnail",
                Cover = "AuQUwch"
            });

            response = await client.PostAsync("https://api.imgur.com/3/album", content);

            if (!response.IsSuccessStatusCode) throw new Exception($"{response.StatusCode} {response.ReasonPhrase}");

            await _albumRepo.CreateAsync(new Entities.ImageEntities.Album
            {
                ImgurId = (await response.Content.ReadAsAsync<ImgurResponseBase>()).Data.Id,
                Name = carAlbumTitle,
            });
        }

        if (!albums.Any(x => x.Name == designAlbumName))
        {
            //Hardcoding a thumbnail's id saves a lot of work, so be sure to upload image manualy to the imgur
            content = JsonContent.Create(new
            {
                Title = designAlbumName,
                Description = "Album for design's thumbnail",
                Cover = "YCHM0Cq"
            });

            response = await client.PostAsync("https://api.imgur.com/3/album", content);

            if (!response.IsSuccessStatusCode) throw new Exception($"{response.StatusCode} {response.ReasonPhrase}");

            await _albumRepo.CreateAsync(new Entities.ImageEntities.Album
            {
                ImgurId = (await response.Content.ReadAsAsync<ImgurResponseBase>()).Data.Id,
                Name = designAlbumName,
            });
        }

        await _albumRepo.SaveAsync();
    }

    public async Task SeedRoles()
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

    public async Task SeedUsers()
    {
        var user = await _userManager.FindByEmailAsync(_config.GetValue<string>("Email:Address"));

        if (user != null) return;

        user = new ApplicationUser
        {
            Email = _config.GetValue<string>("Email:Address"),
            UserName = "PocketForzaHorizonCommunity"
        };

        await _userManager.CreateAsync(user, _config.GetValue<string>("Email:UserPassword"));

        await _userManager.AddToRoleAsync(user, RoleType.ADMIN);
    }
}
