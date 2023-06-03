using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Authentication;

public class EmailConfirmationRequestValidator : AbstractValidator<EmailConfirmationRequest>
{
    public EmailConfirmationRequestValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty()
            .Length(36)
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}")
            .WithMessage("Please, enter a valid id");

        RuleFor(x => x.ConfirmationToken)
            .NotEmpty()
            .WithMessage("Please, enter a valid confimation token");
    }
}
