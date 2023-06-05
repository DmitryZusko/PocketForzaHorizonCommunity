namespace PocketForzaHorizonCommunity.Back.Database.Models.ImgurModels;

public class ImgurAuthResponse
{
    public string Access_Token { get; set; } = null!;
    public int Expires_In { get; set; }
    public string Token_Type { get; set; } = null!;
    public object Scope { get; set; } = null!;
    public string Refresh_Token { get; set; } = null!;
    public int Account_Id { get; set; }
    public string Account_Username { get; set; } = null!;
}
