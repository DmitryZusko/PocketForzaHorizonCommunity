namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

public class RefreshTokensRequest
{
    public string AccessToken { get; set; } = null!;
    public string RefreshToken { get; set; } = null!;
}
