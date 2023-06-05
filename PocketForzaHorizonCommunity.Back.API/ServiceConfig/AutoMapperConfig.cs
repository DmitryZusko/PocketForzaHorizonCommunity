using PocketForzaHorizonCommunity.Back.DTO.Mapper;

namespace PocketForzaHorizonCommunity.Back.API.ServiceConfig
{
    public static class AutoMapperConfig
    {
        public static void ConfigureAutoMapper(this IServiceCollection services)
        {
            services.AddAutoMapper(
                typeof(CampaignStatisticsProfile),
                typeof(CarProfile),
                typeof(CarTypeProfile),
                typeof(DesignProfile),
                typeof(GeneralStatisticsProfile),
                typeof(ManufactureProfile),
                typeof(OnlineStatisticsProfile),
                typeof(PaginationProfile),
                typeof(RecordsStatisticsProfile),
                typeof(TuneProfile),
                typeof(UserProfile));
        }
    }
}
