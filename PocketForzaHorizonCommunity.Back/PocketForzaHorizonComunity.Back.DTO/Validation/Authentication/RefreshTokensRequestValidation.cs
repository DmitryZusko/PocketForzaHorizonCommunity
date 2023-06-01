using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Authentication;

public class RefreshTokensRequestValidation : AbstractValidator<RefreshTokensRequest>
{
    public RefreshTokensRequestValidation()
    {
        RuleFor(x => x.AccessToken)
            .NotEmpty()
            .WithMessage("Please, enter a valid token");

        RuleFor(x => x.RefreshToken)
            .NotEmpty()
            .WithMessage("Please, enter a valid token");
    }
}
