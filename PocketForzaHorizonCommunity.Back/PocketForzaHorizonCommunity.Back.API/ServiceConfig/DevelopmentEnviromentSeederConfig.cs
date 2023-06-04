using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Database.Seeders;

namespace PocketForzaHorizonCommunity.Back.API.ServiceConfig;

public static class DevelopmentEnviromentSeederConfig
{
    public static IServiceScope RunDevelopmentEnvironmentSeeder(this IServiceScope scope)
    {
        var context = scope.ServiceProvider.GetService<ApplicationDbContext>();

        using (var connection = context.Database.GetDbConnection())
        {
            connection.Open();
            var seeder = new DevelopmentEnvironmentSeeder(
                scope.ServiceProvider.GetService<RoleManager<ApplicationRole>>(),
                scope.ServiceProvider.GetService<UserManager<ApplicationUser>>(),
                scope.ServiceProvider.GetService<ICarRepository>(),
                scope.ServiceProvider.GetService<IManufactureRepository>(),
                scope.ServiceProvider.GetService<ICarTypeRepository>(),
                scope.ServiceProvider.GetService<IDesignRepository>(),
                scope.ServiceProvider.GetService<IGalleryRepository>(),
                scope.ServiceProvider.GetService<ITuneRepository>(),
                scope.ServiceProvider.GetService<IAlbumRepository>(),
                scope.ServiceProvider.GetService<IConfiguration>()
                );
            seeder.Seed().Wait();
        }

        return scope;
    }
}
