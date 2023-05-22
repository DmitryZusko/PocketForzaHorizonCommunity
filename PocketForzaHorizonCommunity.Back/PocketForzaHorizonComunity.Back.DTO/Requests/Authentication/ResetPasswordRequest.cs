namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

public class ResetPasswordRequest
{
    public string UserId { get; set; } = null!;
    public string ResetToken { get; set; } = null!;
    public string Password { get; set; } = null!;
}
