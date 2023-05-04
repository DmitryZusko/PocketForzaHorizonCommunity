using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides;

public class GetLastTunesRequestValidator : AbstractValidator<GetLastTunesRequest>
{
    public GetLastTunesRequestValidator()
    {
        RuleFor(x => x.TunesAmount)
            .NotEmpty()
            .GreaterThan(0)
            .LessThan(100);
    }
}
