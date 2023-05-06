using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.RepoAdapters.Interfaces;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

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
                scope.ServiceProvider.GetService<UserManager<ApplicationUser>>(),
                scope.ServiceProvider.GetService<ICarRepoAdapter>(),
                scope.ServiceProvider.GetService<IManufactureRepository>(),
                scope.ServiceProvider.GetService<ICarTypeRepository>(),
                scope.ServiceProvider.GetService<IDesignRepoAdapter>(),
                scope.ServiceProvider.GetService<IGalleryRepository>(),
                scope.ServiceProvider.GetService<ITuneRepository>()
                );
            seeder.Seed().Wait();
        }

        return scope;
    }
}
