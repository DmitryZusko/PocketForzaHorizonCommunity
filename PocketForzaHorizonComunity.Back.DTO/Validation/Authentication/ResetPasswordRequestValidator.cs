using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Authentication;

public class ResetPasswordRequestValidator : AbstractValidator<ResetPasswordRequest>
{
    public ResetPasswordRequestValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty()
            .Length(36)
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}")
            .WithMessage("Please, enter a valid id");

        RuleFor(x => x.ResetToken)
            .NotEmpty()
            .WithMessage("Please, enter a valid token");

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
