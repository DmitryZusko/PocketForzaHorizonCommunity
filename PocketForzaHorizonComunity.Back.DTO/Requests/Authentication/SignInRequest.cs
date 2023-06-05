namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

public class SignInRequest
{
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}
