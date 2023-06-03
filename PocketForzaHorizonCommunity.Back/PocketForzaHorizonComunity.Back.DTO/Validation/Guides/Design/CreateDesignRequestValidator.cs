
using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;

public class CreateDesignRequestValidator : AbstractValidator<CreateDesignRequest>
{
    public CreateDesignRequestValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty()
            .MinimumLength(3)
            .MaximumLength(64)
            .WithMessage("The title should be 3-64 characters long");

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

        RuleFor(x => x.Description)
            .MaximumLength(255)
            .WithMessage("The description should be no more than 255 characters long");

        RuleFor(x => x.Thumbnail)
            .NotEmpty()
            .WithMessage("The design should have a thumbnail");

        RuleFor(x => x.Gallery)
            .Must(x => x.Count() <= 5)
            .WithMessage("The gallery should contain no more than 5 elements")
            .ForEach(image =>
            {
                image.Must(x => x.Length <= 5_242_880)
                .WithMessage("The file size should be up to 5 MB");
            });
    }
}
