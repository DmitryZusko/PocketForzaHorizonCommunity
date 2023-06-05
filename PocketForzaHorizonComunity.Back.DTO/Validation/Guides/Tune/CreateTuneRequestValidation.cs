
using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;

public class CreateTuneRequestValidation : AbstractValidator<CreateTuneRequest>
{
    public CreateTuneRequestValidation()
    {
        RuleFor(x => x.Title)
            .NotEmpty()
            .MaximumLength(64)
            .WithMessage("The title should be no more than 64 characters long");

        RuleFor(x => x.ForzaShareCode)
            .NotEmpty()
            .Matches(@"[0-9]{3}\s[0-9]{3}\s[0-9]{3}")
            .WithMessage("Please, enter a valid forza share code");

        RuleFor(x => x.AuthorId)
            .NotEmpty()
            .Length(36)
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}")
            .WithMessage("Please, enter a valid id");

        RuleFor(x => x.CarId)
            .NotEmpty()
            .Length(36)
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}")
            .WithMessage("Please, enter a valid id");

        RuleFor(x => x.EngineDescription)
            .MaximumLength(511).WithMessage("The description should be no more than 511 characters long");

        RuleFor(x => x.Engine).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.Aspiration).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.Intake).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.Ignition).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.Displacement).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.Exhaust).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.HandlingDescription)
            .MaximumLength(511).WithMessage("The description should be no more than 511 characters long");

        RuleFor(x => x.Brakes).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.Suspension).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.AntiRollBars).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.RollCage).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.DrivetrainDescription)
            .MaximumLength(511).WithMessage("The description should be no more than 511 characters long");

        RuleFor(x => x.Clutch).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.Transmission).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.Differential).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.TiresDescription)
            .MaximumLength(511).WithMessage("The description should be no more than 511 characters long");

        RuleFor(x => x.Compound).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.FrontTireWidth).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.RearTireWidth).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.FrontTrackWidth).IsInEnum().WithMessage("The value should be withing a corresponding enum range");

        RuleFor(x => x.RearTrackWidth).IsInEnum().WithMessage("The value should be withing a corresponding enum range");
    }
}
