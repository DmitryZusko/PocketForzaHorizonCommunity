using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class CarTypeProfile : Profile
{
    public CarTypeProfile()
    {
        CreateMap<CarType, CarTypeDto>();
        CreateMap<CreateCarTypeRequest, CarType>();
        CreateMap<UpdateCarTypeRequest, CarType>();
    }
}
