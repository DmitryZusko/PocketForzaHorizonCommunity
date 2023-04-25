using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<ApplicationUser, UserDto>();
    }
}
