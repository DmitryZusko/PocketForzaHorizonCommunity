using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class CarFilterSchemeProfile : Profile
{
    public CarFilterSchemeProfile()
    {
        CreateMap<CarFilterScheme, CarFilterSchemeDto>();
    }
}
