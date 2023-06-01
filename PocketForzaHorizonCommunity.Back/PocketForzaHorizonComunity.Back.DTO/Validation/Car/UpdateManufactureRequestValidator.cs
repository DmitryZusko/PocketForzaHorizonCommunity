using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Car;

public class UpdateManufactureRequestValidator : AbstractValidator<UpdateManufactureRequest>
{
    public UpdateManufactureRequestValidator()
    {
        RuleFor(x => x.Id)
            .NotEmpty()
            .Length(36)
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}")
            .WithMessage("Please, enter a valid id");

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