namespace PocketForzaHorizonCommunity.Back.DTO.Requests.GetRequests;

public class FilteredCarsGetRequest : PaginationGetRequest
{
    public int MinPrice { get; set; } = 0;
    public int MaxPrice { get; set; } = int.MaxValue;
    public int MinYear { get; set; } = 0;
    public int MaxYear { get; set; } = int.MaxValue;
    public string? SelectedCountries { get; set; } = null;
    public string? SelectedManufactures { get; set; } = null;
    public string? SelectedCarTypes { get; set; } = null;
}