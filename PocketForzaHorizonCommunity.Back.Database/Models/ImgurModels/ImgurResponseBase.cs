namespace PocketForzaHorizonCommunity.Back.Database.Models.ImgurModels;

public class ImgurResponseBase<TEntity> where TEntity : DataModelBase
{
    public TEntity Data { get; set; } = null!;
    public bool Success { get; set; }
    public int Status { get; set; }
}
