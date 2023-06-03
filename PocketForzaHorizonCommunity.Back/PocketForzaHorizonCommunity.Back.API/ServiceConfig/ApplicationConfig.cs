using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos;
using PocketForzaHorizonCommunity.Back.Database.Repos.CarRepos;
using PocketForzaHorizonCommunity.Back.Database.Repos.GuideRepos.DesignRepos;
using PocketForzaHorizonCommunity.Back.Database.Repos.GuideRepos.TuneRepos;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Database.Repos.StatisticsRepos;
using PocketForzaHorizonCommunity.Back.Services.Services;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager;
using PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager.MessageFactory;
using PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager.MessageFactory.Interfaces;

namespace PocketForzaHorizonCommunity.Back.API.ServiceConfig
{
    public static class ApplicationConfig
    {
        public static void ConfigureApplication(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<IApplicationUserRepository, ApplicationUserRepository>();
            services.AddTransient<ICarRepository, CarRepository>();
            services.AddTransient<IDesignRepository, DesignRepository>();
            services.AddTransient<IDesignRatingRepository, DesignRatingRepository>();
            services.AddTransient<ICarTypeRepository, CarTypeRepository>();
            services.AddTransient<IGalleryRepository, GalleryRepository>();
            services.AddTransient<IManufactureRepository, ManufactureRepository>();
            services.AddTransient<ITuneRepository, TuneRepository>();
            services.AddTransient<ITuneRatingRepository, TuneRatingRepository>();
            services.AddTransient<ICampaignStatisticsRepository, CampaignStatisticsRepository>();
            services.AddTransient<IGeneralStatisticsRepository, GeneralStatisticsRepository>();
            services.AddTransient<IOnlineStatisticsRepository, OnlineStatisticsRepository>();
            services.AddTransient<IRecordsStatisticsRepository, RecordsStatisticsRepository>();

            services.AddTransient<ApplicationUserManager<ApplicationUser>>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<ICarService, CarService>();
            services.AddTransient<ICarTypeService, CarTypeService>();
            services.AddTransient<IDesignService, DesignService>();
            services.AddTransient<IManufactureService, ManufactureService>();
            services.AddTransient<ITuneService, TuneService>();
            services.AddSingleton<ISteamService, SteamService>();
            services.AddTransient<ITokenService, TokenService>();

            services.AddTransient<IImageManager, ImageManager>();
            services.AddTransient<IMailManager, MailManager>();
            services.AddTransient<IResetPasswordsMessageFactory, ResetPasswordsMessageFactory>();
            services.AddTransient<IEmailConfirmationMessageFactory, EmailConfirmationMessageFactory>();
            services.AddTransient<IStatisticsGenerator, StatisticsGenerator>();
        }
    }
}
