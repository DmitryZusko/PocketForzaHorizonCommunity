using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class CarProfile : Profile
{
    public CarProfile()
    {
        CreateMap<Car, CarDto>()
            .ForMember(dest => dest.Manufacture, opt => opt.MapFrom(src => src.Manufacture.Name))
            .ForMember(dest => dest.Type, opt => opt.MapFrom(src => src.CarType.Name));

        CreateMap<CreateCarRequest, Car>()
            .ForMember(dest => dest.ManufactureId, opt => opt.MapFrom(src => Guid.Parse(src.ManufactureId)))
            .ForMember(dest => dest.CarTypeId, opt => opt.MapFrom(src => Guid.Parse(src.CarTypeId)));

        CreateMap<UpdateCarRequest, Car>()
            .ForMember(dest => dest.ManufactureId, opt => opt.MapFrom(src => Guid.Parse(src.ManufactureId)))
            .ForMember(dest => dest.CarTypeId, opt => opt.MapFrom(src => Guid.Parse(src.CarTypeId)));
    }
}
