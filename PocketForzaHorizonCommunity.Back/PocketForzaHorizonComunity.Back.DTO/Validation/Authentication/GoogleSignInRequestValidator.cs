using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Authentication;

public class GoogleSignInRequestValidator : AbstractValidator<GoogleSignInRequest>
{
    public GoogleSignInRequestValidator()
    {
        RuleFor(x => x.GoogleToken)
            .NotEmpty()
            .WithMessage("Please, enter a valid token");
    }
}
