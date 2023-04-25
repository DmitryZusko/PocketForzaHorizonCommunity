using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class TuneProfile : Profile
{
    public TuneProfile()
    {
        CreateMap<Tune, TuneDto>()
            .ForMember(dest => dest.AuthorUserName, opt => opt.MapFrom(src => src.User.UserName))
            .ForMember(dest => dest.CarModel, opt => opt.MapFrom(src => $"{src.Car.Manufacture.Name} {src.Car.Model} {src.Car.Year}"));

        CreateMap<Tune, TuneFullInfoDto>()
            .ForMember(dest => dest.AuthorUserName, opt => opt.MapFrom(src => src.User.UserName))
            .ForMember(dest => dest.CarModel, opt => opt.MapFrom(src => $"{src.Car.Manufacture.Name} {src.Car.Model} {src.Car.Year}"));


        CreateMap<CreateTuneRequest, Tune>()
            .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => Guid.Parse(src.AuthorId)))
            .ForMember(dest => dest.CarId, opt => opt.MapFrom(src => Guid.Parse(src.CarId)))
            .ForMember(dest => dest.TuneOptions.EngineDescription, opt => opt.MapFrom(src => src.EngineDescription))
            .ForMember(dest => dest.TuneOptions.Engine, opt => opt.MapFrom(src => src.Engine))
            .ForMember(dest => dest.TuneOptions.Aspiration, opt => opt.MapFrom(src => src.Aspiration))
            .ForMember(dest => dest.TuneOptions.Intake, opt => opt.MapFrom(src => src.Intake))
            .ForMember(dest => dest.TuneOptions.Ignition, opt => opt.MapFrom(src => src.Ignition))
            .ForMember(dest => dest.TuneOptions.Displacement, opt => opt.MapFrom(src => src.Displacement))
            .ForMember(dest => dest.TuneOptions.Exhaust, opt => opt.MapFrom(src => src.Exhaust))
            .ForMember(dest => dest.TuneOptions.HandlingDescription, opt => opt.MapFrom(src => src.HandlingDescription))
            .ForMember(dest => dest.TuneOptions.Brakes, opt => opt.MapFrom(src => src.Brakes))
            .ForMember(dest => dest.TuneOptions.Suspension, opt => opt.MapFrom(src => src.Suspension))
            .ForMember(dest => dest.TuneOptions.AntirollBars, opt => opt.MapFrom(src => src.AntirollBars))
            .ForMember(dest => dest.TuneOptions.RollCage, opt => opt.MapFrom(src => src.RollCage))
            .ForMember(dest => dest.TuneOptions.DrivetrainDescription, opt => opt.MapFrom(src => src.DrivetrainDescription))
            .ForMember(dest => dest.TuneOptions.Clutch, opt => opt.MapFrom(src => src.Clutch))
            .ForMember(dest => dest.TuneOptions.Transmission, opt => opt.MapFrom(src => src.Transmission))
            .ForMember(dest => dest.TuneOptions.Differential, opt => opt.MapFrom(src => src.Differential))
            .ForMember(dest => dest.TuneOptions.TiersDescription, opt => opt.MapFrom(src => src.TiersDescription))
            .ForMember(dest => dest.TuneOptions.Compound, opt => opt.MapFrom(src => src.Compound))
            .ForMember(dest => dest.TuneOptions.FrontTierWidth, opt => opt.MapFrom(src => src.FrontTierWidth))
            .ForMember(dest => dest.TuneOptions.RearTierWidth, opt => opt.MapFrom(src => src.RearTierWidth))
            .ForMember(dest => dest.TuneOptions.FrontTrackwidth, opt => opt.MapFrom(src => src.FrontTrackWidth))
            .ForMember(dest => dest.TuneOptions.RearTrackWidth, opt => opt.MapFrom(src => src.RearTrackWidth));
    }
}
