using FluentValidation;
using PocketForzaHorizonComunity.Back.DTO.Requests.Authentication;

namespace PocketForzaHorizonComunity.Back.DTO.Validation.Authentication;

public class SignUpRequestValidation : AbstractValidator<SignUpRequest>
{
    public SignUpRequestValidation()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .MaximumLength(255)
            .WithMessage("Please, enter a valid email");

        RuleFor(x => x.UserName)
            .NotEmpty()
            .MinimumLength(3)
            .MaximumLength(16)
            .Matches("\\w")
            .WithMessage("UserName should be 3-16 characters long and containt only letters and numbers");

        RuleFor(x => x.Password)
            .NotEmpty()
            .MinimumLength(8)
            .MaximumLength(64)
            .Matches("[a-z]")
            .Matches("[A-z]")
            .Matches("[0-9]")
            .Matches("\\W")
            .WithMessage("Password should be 8-64 characters long and contain an uppercase letter, a number and a symbol");
    }
}
