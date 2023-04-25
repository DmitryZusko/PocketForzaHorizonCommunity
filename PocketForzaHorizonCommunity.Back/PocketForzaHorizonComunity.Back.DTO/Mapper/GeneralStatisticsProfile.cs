using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.UserStatistics;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.StatisticsDtos;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class GeneralStatisticsProfile : Profile
{
    public GeneralStatisticsProfile()
    {
        CreateMap<GeneralStatistics, GeneralStatisticsDto>()
            .ForMember(dest => dest.TimeDriven, opt => opt.MapFrom(src => TimeSpan.FromTicks(src.TimeDrivenInTicks)))
            .ForMember(dest => dest.FavouriteCarModel, opt => opt.MapFrom(src => $"{src.Car.Manufacture.Name} {src.Car.Model} {src.Car.Year}"));
    }
}
