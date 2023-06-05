using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Database.Seeders;

namespace PocketForzaHorizonCommunity.Back.API.ServiceConfig;

public static class ProductionEnvironmentSeederConfig
{
    public static IServiceScope RunProductionEnvironmentSeeder(this IServiceScope scope)
    {
        var context = scope.ServiceProvider.GetService<ApplicationDbContext>() ?? throw new Exception("Database context s null");

        using (var connection = context.Database.GetDbConnection())
        {
            connection.Open();

            var seeder = new ProductionEnviromentSeeder(
                scope.ServiceProvider.GetService<RoleManager<ApplicationRole>>(),
                scope.ServiceProvider.GetService<UserManager<ApplicationUser>>(),
                scope.ServiceProvider.GetService<IAlbumRepository>(),
                scope.ServiceProvider.GetService<IConfiguration>()
                );

            seeder.Seed().Wait();
        }

        return scope;
    }
}
