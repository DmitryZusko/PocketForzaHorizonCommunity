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
            .ForMember(dest => dest.Type, opt => opt.MapFrom(src => src.CarType.Name))
            .ForMember(dest => dest.Image, opt => opt.MapFrom(src => LoadImage(src.ImagePath)));

        CreateMap<CreateCarRequest, Car>()
            .ForMember(dest => dest.ManufactureId, opt => opt.MapFrom(src => Guid.Parse(src.ManufactureId)))
            .ForMember(dest => dest.CarTypeId, opt => opt.MapFrom(src => Guid.Parse(src.CarTypeId)))
            .ForSourceMember(src => src.Image, opt => opt.DoNotValidate());

        CreateMap<UpdateCarRequest, Car>()
            .ForMember(dest => dest.ManufactureId, opt => opt.MapFrom(src => Guid.Parse(src.ManufactureId)))
            .ForMember(dest => dest.CarTypeId, opt => opt.MapFrom(src => Guid.Parse(src.CarTypeId)))
            .ForSourceMember(src => src.Image, opt => opt.DoNotValidate());

        CreateMap<Car, SimplifiedCarDto>()
            .ForMember(dest => dest.CarName, opt => opt.MapFrom(src => $"{src.Manufacture.Name} {src.Model} {src.Year}"));
    }

    private static byte[] LoadImage(string path)
    {
        using (var stream = new FileStream(path, FileMode.Open))
        {
            var image = new byte[stream.Length];
            stream.Read(image);
            return image;
        }

    }
}
