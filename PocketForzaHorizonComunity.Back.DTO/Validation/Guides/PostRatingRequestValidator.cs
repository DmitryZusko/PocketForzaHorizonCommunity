using FluentValidation;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

namespace PocketForzaHorizonCommunity.Back.DTO.Validation.Guides;

public class PostRatingRequestValidator : AbstractValidator<PostRatingRequest>
{
    public PostRatingRequestValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty()
            .Length(36)
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}")
            .WithMessage("Please, enter a valid id");

        RuleFor(x => x.GuideId)
            .NotEmpty()
            .Length(36)
            .Matches("[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}")
            .WithMessage("Please, enter a valid id");

        RuleFor(x => x.Rating)
            .NotEmpty()
            .GreaterThanOrEqualTo(0)
            .LessThanOrEqualTo(5)
            .WithMessage("User rating should be between 0 and 5 inclusively");
    }
}
