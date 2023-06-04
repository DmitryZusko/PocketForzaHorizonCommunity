namespace PocketForzaHorizonCommunity.Back.Database.Seeders.Models;

public class ImgurAuthResponse
{
    public string AccessToken { get; set; } = null!;
    public int ExpiresIn { get; set; }
    public string TokenType { get; set; } = null!;
    public string Scope { get; set; } = null!;
    public string RefreshToken { get; set; } = null!;
    public int AccountId { get; set; }
    public string AccountUsername { get; set; } = null!;
}
