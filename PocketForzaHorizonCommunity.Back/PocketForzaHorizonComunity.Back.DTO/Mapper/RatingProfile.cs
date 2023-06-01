using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class RatingProfile : Profile
{
    public RatingProfile()
    {
        CreateMap<PostRatingRequest, DesignRating>();
        CreateMap<PostRatingRequest, TuneRating>();

    }
}
