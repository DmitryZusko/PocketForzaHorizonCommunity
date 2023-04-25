using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Car;

public class UpdateCarTypeRequestValidator : AbstractValidator<UpdateCarTypeRequest>
{
    public UpdateCarTypeRequestValidator()
    {
        RuleFor(x => x.Id)
            .NotEmpty()
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}");

        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(64);
    }
}
