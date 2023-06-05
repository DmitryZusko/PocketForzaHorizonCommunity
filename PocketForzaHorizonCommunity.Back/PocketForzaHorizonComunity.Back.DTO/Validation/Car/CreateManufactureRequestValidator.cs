using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Car;

public class CreateManufactureRequestValidator : AbstractValidator<CreateManufactureRequest>
{
    public CreateManufactureRequestValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(64)
            .WithMessage("The manufacture name should be up to 64 characters long");

        RuleFor(x => x.Country)
            .NotEmpty()
            .MaximumLength(64)
            .WithMessage("The country name should be up to 64 characters long");

    }
}
