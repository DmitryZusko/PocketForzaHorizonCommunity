using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Car;

public class CreateCarTypeRequestValidation : AbstractValidator<CreateCarTypeRequest>
{
    public CreateCarTypeRequestValidation()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(64);
    }
}
