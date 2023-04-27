using FluentValidation;
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

        RuleFor(x => x.Engine).NotEmpty().IsInEnum().IsInEnum();

        RuleFor(x => x.Aspiration).NotEmpty().IsInEnum().IsInEnum();

        RuleFor(x => x.Intake).NotEmpty().IsInEnum();

        RuleFor(x => x.Ignition).NotEmpty().IsInEnum();

        RuleFor(x => x.Displacement).NotEmpty().IsInEnum();

        RuleFor(x => x.Exhaust).NotEmpty().IsInEnum();

        RuleFor(x => x.HandlingDescription)
            .MaximumLength(511);

        RuleFor(x => x.Brakes).NotEmpty().IsInEnum();

        RuleFor(x => x.Suspension).NotEmpty().IsInEnum();

        RuleFor(x => x.AntirollBars).NotEmpty().IsInEnum();

        RuleFor(x => x.RollCage).NotEmpty().IsInEnum();

        RuleFor(x => x.DrivetrainDescription)
            .MaximumLength(511);

        RuleFor(x => x.Clutch).NotEmpty().IsInEnum();

        RuleFor(x => x.Transmission).NotEmpty().IsInEnum();

        RuleFor(x => x.Differential).NotEmpty().IsInEnum();

        RuleFor(x => x.TiersDescription)
            .MaximumLength(511);

        RuleFor(x => x.Compound).NotEmpty().IsInEnum();

        RuleFor(x => x.FrontTierWidth).NotEmpty().IsInEnum();

        RuleFor(x => x.RearTierWidth).NotEmpty().IsInEnum();

        RuleFor(x => x.FrontTrackWidth).NotEmpty().IsInEnum();

        RuleFor(x => x.RearTrackWidth).NotEmpty().IsInEnum();
    }
}
