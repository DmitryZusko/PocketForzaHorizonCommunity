using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Authentication;

public class PasswordRestorationMessageRequestValidator : AbstractValidator<PasswordRestorationMessageRequest>
{
    public PasswordRestorationMessageRequestValidator()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .MaximumLength(255)
            .WithMessage("Please, enter a valid email");
    }
}
