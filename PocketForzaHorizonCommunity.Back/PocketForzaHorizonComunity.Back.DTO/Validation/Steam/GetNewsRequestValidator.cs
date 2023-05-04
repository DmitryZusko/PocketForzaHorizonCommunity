using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Steam;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Steam;

public class GetNewsRequestValidator : AbstractValidator<GetNewsRequest>
{
    public GetNewsRequestValidator()
    {
        RuleFor(x => x.Count)
            .NotEmpty()
            .GreaterThan(0)
            .LessThan(1000);

        RuleFor(x => x.MaxLength)
            .NotEmpty()
            .GreaterThan(0);
    }
}
