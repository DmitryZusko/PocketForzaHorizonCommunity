using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides.Design;

public class FilteredDesignsGetRequestValidator : AbstractValidator<FilteredDesignsGetRequest>
{
    public FilteredDesignsGetRequestValidator()
    {
        RuleFor(x => x.Page)
            .GreaterThanOrEqualTo(0)
            .WithMessage("0 - is the minimal page number");

        //if PageSize = 0 - app returns all entities 
        RuleFor(x => x.PageSize)
            .GreaterThanOrEqualTo(0)
            .WithMessage("0 - is the minimal page size");

        RuleFor(x => x.DescriptionLimit)
            .GreaterThanOrEqualTo(0)
            .LessThanOrEqualTo(255)
            .WithMessage("The description limit should be between 0 and 255");

        RuleFor(x => x.SearchQuery)
            .MaximumLength(255)
            .WithMessage("The search query should be no more than 255 characters long");
    }
}
