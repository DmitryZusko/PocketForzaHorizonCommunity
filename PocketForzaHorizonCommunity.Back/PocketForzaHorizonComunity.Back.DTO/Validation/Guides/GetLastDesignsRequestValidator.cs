using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides;

public class GetLastDesignsRequestValidator : AbstractValidator<GetLastDesignsRequest>
{
    public GetLastDesignsRequestValidator()
    {
        RuleFor(x => x.DescriptionLimit)
            .NotEmpty()
            .GreaterThan(0)
            .LessThan(100);
    }
}
