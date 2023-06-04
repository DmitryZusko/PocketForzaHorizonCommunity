namespace PocketForzaHorizonCommunity.Back.Database.Models.ImgurModels;

public class ImgurResponseBase
{
    public DataModel Data { get; set; } = null!;
    public bool Success { get; set; }
    public int Status { get; set; }
}
