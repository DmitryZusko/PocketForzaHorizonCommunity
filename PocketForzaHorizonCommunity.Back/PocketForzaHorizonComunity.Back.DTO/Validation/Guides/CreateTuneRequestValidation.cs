using FluentValidation;
using PocketForzaHorizonCommunity.Back.Database.Enums;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides;

public class CreateTuneRequestValidation : AbstractValidator<CreateTuneRequest>
{
    public CreateTuneRequestValidation()
    {
        RuleFor(x => x.Title)
            .NotEmpty()
            .MaximumLength(64);

        RuleFor(x => x.ForzaShareCode)
            .NotEmpty()
            .Matches(@"[0-9]{3}\s[0-9]{3}\s[0-9]{3}");

        RuleFor(x => x.AuthorId)
            .NotEmpty()
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}");

        RuleFor(x => x.CarId)
            .NotEmpty()
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}");

        RuleFor(x => x.EngineDescription)
            .MaximumLength(511);

        RuleFor(x => x.Engine)
            .NotEmpty()
            .IsEnumName(typeof(EngineType));

        RuleFor(x => x.Aspiration)
            .NotEmpty()
            .IsEnumName(typeof(AspirationType));

        RuleFor(x => x.Intake)
            .NotEmpty()
            .IsEnumName(typeof(IntakeType));

        RuleFor(x => x.Ignition)
            .NotEmpty()
            .IsEnumName(typeof(IgnitionType));

        RuleFor(x => x.Displacement)
            .NotEmpty()
            .IsEnumName(typeof(DisplacementType));

        RuleFor(x => x.Exhaust)
            .NotEmpty()
            .IsEnumName(typeof(ExhaustType));

        RuleFor(x => x.HandlingDescription)
            .MaximumLength(511);

        RuleFor(x => x.Brakes)
            .NotEmpty()
            .IsEnumName(typeof(BrakesType));

        RuleFor(x => x.Suspension)
            .NotEmpty()
            .IsEnumName(typeof(SuspensionType));

        RuleFor(x => x.AntirollBars)
            .NotEmpty()
            .IsEnumName(typeof(AntirollBarsType));

        RuleFor(x => x.RollCage)
            .NotEmpty()
            .IsEnumName(typeof(RollCageType));

        RuleFor(x => x.DrivetrainDescription)
            .MaximumLength(511);

        RuleFor(x => x.Clutch)
            .NotEmpty()
            .IsEnumName(typeof(ClutchType));

        RuleFor(x => x.Transmission)
            .NotEmpty()
            .IsEnumName(typeof(TransmissionType));

        RuleFor(x => x.Differential)
            .NotEmpty()
            .IsEnumName(typeof(DifferentialType));

        RuleFor(x => x.TiersDescription)
            .MaximumLength(511);

        RuleFor(x => x.Compound)
            .NotEmpty()
            .IsEnumName(typeof(TiersCompoundType));

        RuleFor(x => x.FrontTierWidth)
            .NotEmpty()
            .IsEnumName(typeof(TiersWidthType));

        RuleFor(x => x.RearTierWidth)
            .NotEmpty()
            .IsEnumName(typeof(TiersWidthType));

        RuleFor(x => x.FrontTrackWidth)
            .NotEmpty()
            .IsEnumName(typeof(TrackWidthType));

        RuleFor(x => x.RearTrackWidth)
            .NotEmpty()
            .IsEnumName(typeof(TrackWidthType));
    }
}
