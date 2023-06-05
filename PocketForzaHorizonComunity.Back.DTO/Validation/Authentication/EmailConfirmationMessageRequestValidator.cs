using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Authentication;

public class EmailConfirmationMessageRequestValidator : AbstractValidator<EmailConfirmationMessageRequest>
{
    public EmailConfirmationMessageRequestValidator()
    {
        RuleFor(x => x.DestinationEmail)
            .NotEmpty()
            .EmailAddress()
            .MaximumLength(255)
            .WithMessage("Please, enter a valid email");
    }
}
