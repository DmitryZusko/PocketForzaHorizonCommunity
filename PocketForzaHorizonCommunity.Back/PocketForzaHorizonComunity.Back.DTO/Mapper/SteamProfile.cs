using AutoMapper;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.SteamDtos;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamNews;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class SteamProfile : Profile
{
    public SteamProfile()
    {
        CreateMap<NewsItem, NewsItemDto>();
        CreateMap<AppNews, AppNewsDto>();

        CreateMap<GlobalAchivement, GlobalAchivementDto>();
    }
}
