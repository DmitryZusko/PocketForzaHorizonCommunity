using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides.Tune;

public class GetLastTunesRequestValidator : AbstractValidator<GetLastTunesRequest>
{
    public GetLastTunesRequestValidator()
    {
        RuleFor(x => x.TunesAmount)
            .NotEmpty()
            .GreaterThan(0)
            .LessThan(100)
            .WithMessage("The limit should be between 0 and 100");
    }
}
