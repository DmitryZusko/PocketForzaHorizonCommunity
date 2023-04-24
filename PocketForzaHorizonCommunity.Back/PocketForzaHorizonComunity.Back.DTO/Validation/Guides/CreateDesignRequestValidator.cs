using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides;

public class CreateDesignRequestValidator : AbstractValidator<CreateDesignRequest>
{
    public CreateDesignRequestValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty()
            .MinimumLength(3)
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

        RuleFor(x => x.Description)
            .MaximumLength(255);
    }
}
