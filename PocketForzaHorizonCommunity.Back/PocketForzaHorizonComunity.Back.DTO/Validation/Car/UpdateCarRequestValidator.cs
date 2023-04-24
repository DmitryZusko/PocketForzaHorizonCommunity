using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Car;

public class UpdateCarRequestValidator : AbstractValidator<UpdateCarRequest>
{
    public UpdateCarRequestValidator()
    {
        RuleFor(x => x.Id)
            .NotEmpty()
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}");

        RuleFor(x => x.Model)
            .NotEmpty()
            .MaximumLength(64);

        RuleFor(x => x.Year)
            .NotEmpty()
            .GreaterThanOrEqualTo(1900)
            .LessThanOrEqualTo(2100);

        RuleFor(x => x.Price)
            .NotEmpty()
            .GreaterThanOrEqualTo(5000)
            .LessThanOrEqualTo(1_000_000_000);

        RuleFor(x => x.Manufacture)
            .NotEmpty()
            .MaximumLength(64);

        RuleFor(x => x.CarType)
            .NotEmpty()
            .MaximumLength(64);
    }
}
