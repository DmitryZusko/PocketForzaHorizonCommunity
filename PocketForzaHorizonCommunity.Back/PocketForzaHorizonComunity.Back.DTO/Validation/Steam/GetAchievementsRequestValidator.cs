using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Steam;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Steam;

public class GetAchievementsRequestValidator : AbstractValidator<GetAchievementsRequest>
{
    public GetAchievementsRequestValidator()
    {
        RuleFor(x => x.Amount)
            .NotEmpty()
            .GreaterThan(0)
            .WithMessage("The amount should be at least 1");
    }
}
