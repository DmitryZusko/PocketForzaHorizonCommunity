using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides.Tune;

public class FilteredTuneGetRequestValidator : AbstractValidator<FilteredTuneGetRequest>
{
    public FilteredTuneGetRequestValidator()
    {
        RuleFor(x => x.Page)
            .GreaterThanOrEqualTo(0)
            .WithMessage("0 - is the minimal page number");

        //if PageSize = 0 - app returns all entities 
        RuleFor(x => x.PageSize)
            .GreaterThanOrEqualTo(0)
            .WithMessage("0 - is the minimal page size");

        RuleFor(x => x.SearchQuery)
            .MaximumLength(255)
            .WithMessage("The search query should be no more than 255 characters long");
    }
}
