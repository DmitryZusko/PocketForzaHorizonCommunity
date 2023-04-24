namespace PocketForzaHorizonComunity.Back.DTO.Requests.Guides;

public class CreateDesignRequest
{
    public string Title { get; set; } = null!;
    public string ForzaShareCode { get; set; } = null!;
    public string AuthorId { get; set; } = null!;
    public string CarId { get; set; } = null!;
    public string Description { get; set; } = string.Empty;
}
