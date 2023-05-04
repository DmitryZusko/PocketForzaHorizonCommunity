using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides;

public class GetLastDesignsRequestValidator : AbstractValidator<GetLastDesignsRequest>
{
    public GetLastDesignsRequestValidator()
    {
        RuleFor(x => x.DesignsAmount)
            .NotEmpty()
            .GreaterThan(0)
            .LessThan(100);
    }
}
