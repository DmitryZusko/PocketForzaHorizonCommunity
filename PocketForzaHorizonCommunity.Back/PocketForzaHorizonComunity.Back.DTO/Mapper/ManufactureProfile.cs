using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class ManufactureProfile : Profile
{
    public ManufactureProfile()
    {
        CreateMap<Manufacture, ManufactureDto>();
        CreateMap<CreateManufactureRequest, Manufacture>();
        CreateMap<UpdateManufactureRequest, Manufacture>();
    }
}
