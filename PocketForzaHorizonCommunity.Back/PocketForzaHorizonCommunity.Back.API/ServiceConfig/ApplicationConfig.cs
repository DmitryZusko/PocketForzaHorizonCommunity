using PocketForzaHorizonCommunity.Back.Database.RepoAdapters;
using PocketForzaHorizonCommunity.Back.Database.RepoAdapters.Interfaces;
using PocketForzaHorizonCommunity.Back.Database.RepoDecorators;
using PocketForzaHorizonCommunity.Back.Database.Repos;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Services;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.API.ServiceConfig
{
    public static class ApplicationConfig
    {
        public static void ConfigureApplication(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddTransient<ICarRepoAdapter, CarRepoAdapter>();
            services.AddTransient<IDesignRepoAdapter, DesignRepoAdapter>();

            services.AddTransient<ICarTypeRepository, CarTypeRepository>();
            services.AddTransient<IGalleryRepository, GalleryRepository>();
            services.AddTransient<IManufactureRepository, ManufactureRepository>();
            services.AddTransient<ITuneRepository, TuneRepository>();

            services.AddTransient<ICarService, CarService>();
            services.AddTransient<ICarTypeService, CarTypeService>();
            services.AddTransient<IDesignService, DesignService>();
            services.AddTransient<IManufactureService, ManufactureService>();
            services.AddTransient<ITuneService, TuneService>();
            services.AddSingleton<ISteamService, SteamService>();

            services.AddTransient<IImageManager, ImageManager>();

            services.AddTransient<IStatisticsGenerator, StatisticsGenerator>();
        }
    }
}
