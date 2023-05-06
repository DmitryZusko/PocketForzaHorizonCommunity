using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;

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

        RuleFor(x => x.Engine).IsInEnum();

        RuleFor(x => x.Aspiration).IsInEnum();

        RuleFor(x => x.Intake).IsInEnum();

        RuleFor(x => x.Ignition).IsInEnum();

        RuleFor(x => x.Displacement).IsInEnum();

        RuleFor(x => x.Exhaust).IsInEnum();

        RuleFor(x => x.HandlingDescription)
            .MaximumLength(511);

        RuleFor(x => x.Brakes).IsInEnum();

        RuleFor(x => x.Suspension).IsInEnum();

        RuleFor(x => x.AntiRollBars).IsInEnum();

        RuleFor(x => x.RollCage).IsInEnum();

        RuleFor(x => x.DrivetrainDescription)
            .MaximumLength(511);

        RuleFor(x => x.Clutch).IsInEnum();

        RuleFor(x => x.Transmission).IsInEnum();

        RuleFor(x => x.Differential).IsInEnum();

        RuleFor(x => x.TiersDescription)
            .MaximumLength(511);

        RuleFor(x => x.Compound).IsInEnum();

        RuleFor(x => x.FrontTierWidth).IsInEnum();

        RuleFor(x => x.RearTierWidth).IsInEnum();

        RuleFor(x => x.FrontTrackWidth).IsInEnum();

        RuleFor(x => x.RearTrackWidth).IsInEnum();
    }
}
