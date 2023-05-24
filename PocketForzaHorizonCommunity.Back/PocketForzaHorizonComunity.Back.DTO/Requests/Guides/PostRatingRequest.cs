namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

public class PostRatingRequest
{
    public Guid UserId { get; set; }
    public Guid GuideId { get; set; }
    public double Rating { get; set; }
}
