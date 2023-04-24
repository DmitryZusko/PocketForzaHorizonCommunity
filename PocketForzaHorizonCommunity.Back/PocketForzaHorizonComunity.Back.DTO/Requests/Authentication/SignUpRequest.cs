namespace PocketForzaHorizonComunity.Back.DTO.Requests.Authentication;

public class SignUpRequest
{
    public string Email { get; set; } = null!;
    public string UserName { get; set; } = null!;
    public string Password { get; set; } = null!;
}
