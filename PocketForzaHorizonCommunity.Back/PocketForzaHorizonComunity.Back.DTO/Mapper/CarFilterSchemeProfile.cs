using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.Cars;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class CarFilterSchemeProfile : Profile
{
    public CarFilterSchemeProfile()
    {
        CreateMap<CarFilterScheme, CarFilterSchemeDto>();
    }
}
