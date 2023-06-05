namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

public class PostRatingRequest
{
    public string UserId { get; set; } = null!;
    public string GuideId { get; set; } = null!;
    public double Rating { get; set; }
}
