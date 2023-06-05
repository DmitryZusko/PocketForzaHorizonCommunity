using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatisticsEntitites;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.StatisticsDtos;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class RecordsStatisticsProfile : Profile
{
    public RecordsStatisticsProfile()
    {
        CreateMap<RecordsStatistics, RecordsStatisticsDto>()
            .ForMember(dest => dest.LongestSkillChain, opt => opt.MapFrom(src => TimeSpan.FromTicks(src.LongestSkillChainInTicks)));
    }
}
