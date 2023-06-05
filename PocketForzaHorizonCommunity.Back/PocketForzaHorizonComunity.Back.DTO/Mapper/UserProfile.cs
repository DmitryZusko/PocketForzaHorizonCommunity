using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.Auth;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<ApplicationUser, UserDto>()
            .ForMember(dest => dest.OwnedCarsByUser, opt => opt.MapFrom(src => src.OwnedCarsByUser.Select(c => c.CarId)));
    }
}
