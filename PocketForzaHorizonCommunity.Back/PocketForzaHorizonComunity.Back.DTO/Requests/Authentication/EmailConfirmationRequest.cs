namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

public class EmailConfirmationRequest
{
    public string UserId { get; set; } = null!;
    public string ConfirmationToken { get; set; } = null!;
}
