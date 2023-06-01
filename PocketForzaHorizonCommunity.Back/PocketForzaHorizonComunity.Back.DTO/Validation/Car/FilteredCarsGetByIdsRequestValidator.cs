using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Car;

public class FilteredCarsGetByIdsRequestValidator : AbstractValidator<FilteredCarsGetByIdsRequest>
{
    public FilteredCarsGetByIdsRequestValidator()
    {
        RuleFor(x => x.MinPrice)
            .GreaterThanOrEqualTo(0)
            .WithMessage("The minimal price should be greater than or equal to 0");

        RuleFor(x => x.MinPrice)
            .LessThanOrEqualTo(1_000_000_000)
            .WithMessage("The maximal price should be less than or equal to 1,000,000,000");

        RuleFor(x => x.MinYear)
            .GreaterThanOrEqualTo(1900)
            .WithMessage("The minimal year should be greater than or equal to 1900");

        RuleFor(x => x.MaxYear)
            .LessThanOrEqualTo(1900)
            .WithMessage("The maximal year should be less than or equal to 2100");

        //Average word's length in common english ~5 characters, so I belive a lmit in 10,000 characters will more than enough both to protect app and give good user experience
        RuleFor(x => x.SelectedManufactures)
            .MaximumLength(10000)
            .WithMessage("Selected manufactures shouldn't exceed the length of 10,000");

        //Average word's length in common english ~5 characters, so I belive a lmit in 10,000 characters will more than enough both to protect app and give good user experience
        RuleFor(x => x.SelectedCarTypes)
            .MaximumLength(10000)
            .WithMessage("Selected car types shouldn't exceed the length of 10,000");

        //Average word's length in common english ~5 characters, so I belive a lmit in 10,000 characters will more than enough both to protect app and give good user experience
        RuleFor(x => x.SelectedCountries)
            .MaximumLength(10000)
            .WithMessage("Selected car types shouldn't exceed the length of 10,000");

        RuleFor(x => x.Page)
            .GreaterThanOrEqualTo(0)
            .WithMessage("0 - is the minimal page number");

        //if PageSize = 0 - app returns all entities 
        RuleFor(x => x.PageSize)
            .GreaterThanOrEqualTo(0)
            .WithMessage("0 - is the minimal page size");

        RuleFor(x => x.Ids)
            .Must(x => x.Count() < 1000)
            .WithMessage("Please, select no more than a 1,000 cars");
    }
}
