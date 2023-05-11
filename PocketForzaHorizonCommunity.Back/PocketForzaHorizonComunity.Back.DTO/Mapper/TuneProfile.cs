using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class TuneProfile : Profile
{
    public TuneProfile()
    {
        CreateMap<Tune, TuneDto>()
            .ForMember(dest => dest.AuthorUsername, opt => opt.MapFrom(src => src.User.UserName))
            .ForMember(dest => dest.CarModel, opt => opt.MapFrom(src => $"{src.Car.Manufacture.Name} {src.Car.Model} {src.Car.Year}"))
            .ForMember(dest => dest.EngineType, opt => opt.MapFrom(src => src.TuneOptions.Engine))
            .ForMember(dest => dest.AspirationType, opt => opt.MapFrom(src => src.TuneOptions.Aspiration))
            .ForMember(dest => dest.TiresCompound, opt => opt.MapFrom(src => src.TuneOptions.Compound));

        CreateMap<Tune, TuneFullInfoDto>()
            .ForMember(dest => dest.AuthorUsername, opt => opt.MapFrom(src => src.User.UserName))
            .ForMember(dest => dest.CarModel, opt => opt.MapFrom(src => $"{src.Car.Manufacture.Name} {src.Car.Model} {src.Car.Year}"))
            .ForMember(dest => dest.EngineDescription, opt => opt.MapFrom(src => src.TuneOptions.EngineDescription))
            .ForMember(dest => dest.EngineType, opt => opt.MapFrom(src => src.TuneOptions.Engine))
            .ForMember(dest => dest.AspirationType, opt => opt.MapFrom(src => src.TuneOptions.Aspiration))
            .ForMember(dest => dest.Intake, opt => opt.MapFrom(src => src.TuneOptions.Intake))
            .ForMember(dest => dest.Ignition, opt => opt.MapFrom(src => src.TuneOptions.Ignition))
            .ForMember(dest => dest.Displacement, opt => opt.MapFrom(src => src.TuneOptions.Displacement))
            .ForMember(dest => dest.Exhaust, opt => opt.MapFrom(src => src.TuneOptions.Exhaust))
            .ForMember(dest => dest.HandlingDescription, opt => opt.MapFrom(src => src.TuneOptions.HandlingDescription))
            .ForMember(dest => dest.Brakes, opt => opt.MapFrom(src => src.TuneOptions.Brakes))
            .ForMember(dest => dest.Suspension, opt => opt.MapFrom(src => src.TuneOptions.Suspension))
            .ForMember(dest => dest.AntiRollBars, opt => opt.MapFrom(src => src.TuneOptions.AntiRollBars))
            .ForMember(dest => dest.RollCage, opt => opt.MapFrom(src => src.TuneOptions.RollCage))
            .ForMember(dest => dest.DrivetrainDescription, opt => opt.MapFrom(src => src.TuneOptions.DrivetrainDescription))
            .ForMember(dest => dest.Clutch, opt => opt.MapFrom(src => src.TuneOptions.Clutch))
            .ForMember(dest => dest.Transmission, opt => opt.MapFrom(src => src.TuneOptions.Transmission))
            .ForMember(dest => dest.Differential, opt => opt.MapFrom(src => src.TuneOptions.Differential))
            .ForMember(dest => dest.TiresDescription, opt => opt.MapFrom(src => src.TuneOptions.TiresDescription))
            .ForMember(dest => dest.TiresCompound, opt => opt.MapFrom(src => src.TuneOptions.Compound))
            .ForMember(dest => dest.FrontTireWidth, opt => opt.MapFrom(src => src.TuneOptions.FrontTireWidth))
            .ForMember(dest => dest.RearTireWidth, opt => opt.MapFrom(src => src.TuneOptions.RearTireWidth))
            .ForMember(dest => dest.FrontTrackWidth, opt => opt.MapFrom(src => src.TuneOptions.FrontTrackWidth))
            .ForMember(dest => dest.RearTrackWidth, opt => opt.MapFrom(src => src.TuneOptions.RearTrackWidth));


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
            .ForPath(dest => dest.TuneOptions.AntiRollBars, opt => opt.MapFrom(src => src.AntiRollBars))
            .ForPath(dest => dest.TuneOptions.RollCage, opt => opt.MapFrom(src => src.RollCage))
            .ForPath(dest => dest.TuneOptions.DrivetrainDescription, opt => opt.MapFrom(src => src.DrivetrainDescription))
            .ForPath(dest => dest.TuneOptions.Clutch, opt => opt.MapFrom(src => src.Clutch))
            .ForPath(dest => dest.TuneOptions.Transmission, opt => opt.MapFrom(src => src.Transmission))
            .ForPath(dest => dest.TuneOptions.Differential, opt => opt.MapFrom(src => src.Differential))
            .ForPath(dest => dest.TuneOptions.TiresDescription, opt => opt.MapFrom(src => src.TiresDescription))
            .ForPath(dest => dest.TuneOptions.Compound, opt => opt.MapFrom(src => src.Compound))
            .ForPath(dest => dest.TuneOptions.FrontTireWidth, opt => opt.MapFrom(src => src.FrontTireWidth))
            .ForPath(dest => dest.TuneOptions.RearTireWidth, opt => opt.MapFrom(src => src.RearTireWidth))
            .ForPath(dest => dest.TuneOptions.FrontTrackWidth, opt => opt.MapFrom(src => src.FrontTrackWidth))
            .ForPath(dest => dest.TuneOptions.RearTrackWidth, opt => opt.MapFrom(src => src.RearTrackWidth));
    }
}
