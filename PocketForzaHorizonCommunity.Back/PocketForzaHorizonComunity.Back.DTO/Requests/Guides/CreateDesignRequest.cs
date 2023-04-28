using Microsoft.AspNetCore.Http;

namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;

public class CreateDesignRequest
{
    public string Title { get; set; } = null!;
    public string ForzaShareCode { get; set; } = null!;
    public string AuthorId { get; set; } = null!;
    public string CarId { get; set; } = null!;
    public IFormFile Thumbnail { get; set; } = null!;
    public IList<IFormFile> Gallery { get; set; } = new List<IFormFile>();
    public string Description { get; set; } = string.Empty;
}
