using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides.Design;

public class GetLastDesignsRequestValidator : AbstractValidator<GetLastDesignsRequest>
{
    public GetLastDesignsRequestValidator()
    {
        RuleFor(x => x.DescriptionLimit)
            .NotEmpty()
            .GreaterThan(0)
            .LessThan(100)
            .WithMessage("The limit should be between 0 and 100");
    }
}
