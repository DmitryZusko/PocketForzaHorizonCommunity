using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database;

namespace PocketForzaHorizonCommunity.Back.API.ServiceConfig;

public static class MigrationConfig
{
    public static IServiceScope MigrateDatabase(this IServiceScope scope)
    {
        var context = scope.ServiceProvider.GetService<ApplicationDbContext>() ?? throw new Exception("Database context s null");

        context.Database.Migrate();

        return scope;
    }
}
