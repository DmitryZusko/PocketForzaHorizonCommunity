namespace PocketForzaHorizonCommunity.Back.Database.Models.ImgurModels;

public class MediaDataModel : DataModelBase
{
    public int Account_id { get; set; }
    public string Account_url { get; set; } = null!;
    public string Ad_type { get; set; } = null!;
    public string Ad_url { get; set; } = null!;
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string Type { get; set; } = null!;
    public int Width { get; set; }
    public int Height { get; set; }
    public int Size { get; set; }
    public int Views { get; set; }
    public string Section { get; set; } = null!;
    public string Vote { get; set; } = null!;
    public int Bandwidth { get; set; }
    public bool Animated { get; set; }
    public bool Favorite { get; set; }
    public bool In_gallery { get; set; }
    public bool In_most_viral { get; set; }
    public bool Has_sound { get; set; }
    public bool Is_ad { get; set; }
    public string Nsfw { get; set; } = null!;
    public string Link { get; set; } = null!;
    public List<string> Tags { get; set; } = null!;
    public int Datetime { get; set; }
    public string Mp4 { get; set; } = null!;
    public string Hls { get; set; } = null!;
}
