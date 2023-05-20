namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.Auth;

public class AuthTokenDto
{
    public string AccessToken { get; set; } = null!;
    public string RefreshToken { get; set; } = null!;
}
