using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Car;

public class CreateCarRequestValidation : AbstractValidator<CreateCarRequest>
{
    public CreateCarRequestValidation()
    {
        RuleFor(x => x.Model)
            .NotEmpty()
            .MaximumLength(64)
            .WithMessage("The model name should be up to 64 characters long");

        RuleFor(x => x.Year)
            .NotEmpty()
            .GreaterThanOrEqualTo(1900)
            .LessThanOrEqualTo(2100)
            .WithMessage("The year should be between 1900 and 2100");

        RuleFor(x => x.Price)
            .NotEmpty()
            .GreaterThanOrEqualTo(5_000)
            .LessThanOrEqualTo(1_000_000_000)
            .WithMessage("The price should be between 5,000 and 1,000,000,000");

        RuleFor(x => x.Image)
            .NotEmpty()
            .Must(x => x.Length <= 5_242_800)
            .WithMessage("The image size should be up to 5 MB");

        RuleFor(x => x.ManufactureId)
            .NotEmpty()
            .Length(36)
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}")
            .WithMessage("PLease, enter a valid id");

        RuleFor(x => x.CarTypeId)
            .NotEmpty()
            .Length(36)
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}")
            .WithMessage("PLease, enter a valid id");
    }
}
