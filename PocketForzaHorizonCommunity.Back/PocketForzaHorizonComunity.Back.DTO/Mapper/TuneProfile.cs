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
            .ForPath(dest => dest.TuneOptions.EngineDescription, opt => opt.MapFrom(src => src.EngineDescription))
            .ForPath(dest => dest.TuneOptions.Engine, opt => opt.MapFrom(src => src.Engine))
            .ForPath(dest => dest.TuneOptions.Aspiration, opt => opt.MapFrom(src => src.Aspiration))
            .ForPath(dest => dest.TuneOptions.Intake, opt => opt.MapFrom(src => src.Intake))
            .ForPath(dest => dest.TuneOptions.Ignition, opt => opt.MapFrom(src => src.Ignition))
            .ForPath(dest => dest.TuneOptions.Displacement, opt => opt.MapFrom(src => src.Displacement))
            .ForPath(dest => dest.TuneOptions.Exhaust, opt => opt.MapFrom(src => src.Exhaust))
            .ForPath(dest => dest.TuneOptions.HandlingDescription, opt => opt.MapFrom(src => src.HandlingDescription))
            .ForPath(dest => dest.TuneOptions.Brakes, opt => opt.MapFrom(src => src.Brakes))
            .ForPath(dest => dest.TuneOptions.Suspension, opt => opt.MapFrom(src => src.Suspension))
            .ForPath(dest => dest.TuneOptions.AntirollBars, opt => opt.MapFrom(src => src.AntirollBars))
            .ForPath(dest => dest.TuneOptions.RollCage, opt => opt.MapFrom(src => src.RollCage))
            .ForPath(dest => dest.TuneOptions.DrivetrainDescription, opt => opt.MapFrom(src => src.DrivetrainDescription))
            .ForPath(dest => dest.TuneOptions.Clutch, opt => opt.MapFrom(src => src.Clutch))
            .ForPath(dest => dest.TuneOptions.Transmission, opt => opt.MapFrom(src => src.Transmission))
            .ForPath(dest => dest.TuneOptions.Differential, opt => opt.MapFrom(src => src.Differential))
            .ForPath(dest => dest.TuneOptions.TiersDescription, opt => opt.MapFrom(src => src.TiersDescription))
            .ForPath(dest => dest.TuneOptions.Compound, opt => opt.MapFrom(src => src.Compound))
            .ForPath(dest => dest.TuneOptions.FrontTierWidth, opt => opt.MapFrom(src => src.FrontTierWidth))
            .ForPath(dest => dest.TuneOptions.RearTierWidth, opt => opt.MapFrom(src => src.RearTierWidth))
            .ForPath(dest => dest.TuneOptions.FrontTrackwidth, opt => opt.MapFrom(src => src.FrontTrackWidth))
            .ForPath(dest => dest.TuneOptions.RearTrackWidth, opt => opt.MapFrom(src => src.RearTrackWidth));
    }
}
