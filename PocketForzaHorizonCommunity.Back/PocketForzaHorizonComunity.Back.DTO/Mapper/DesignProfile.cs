using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class DesignProfile : Profile
{
    public DesignProfile()
    {
        CreateMap<Design, DesignDto>()
            .ForMember(dest => dest.AuthorUserName, opt => opt.MapFrom(src => src.User.UserName))
            .ForMember(dest => dest.CarModel, opt => opt.MapFrom(src => $"{src.Car.Manufacture.Name} {src.Car.Model} {src.Car.Year}"));

        CreateMap<Design, DesignFullInfoDto>()
                        .ForMember(dest => dest.AuthorUserName, opt => opt.MapFrom(src => src.User.UserName))
            .ForMember(dest => dest.CarModel, opt => opt.MapFrom(src => $"{src.Car.Manufacture.Name} {src.Car.Model} {src.Car.Year}"))
            .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.DesignOptions.Description));

        CreateMap<CreateDesignRequest, Design>()
            .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => Guid.Parse(src.AuthorId)))
            .ForMember(dest => dest.CarId, opt => opt.MapFrom(src => Guid.Parse(src.CarId)))
            .ForMember(dest => dest.DesignOptions.Description, opt => opt.MapFrom(src => src.Description));
    }
}
