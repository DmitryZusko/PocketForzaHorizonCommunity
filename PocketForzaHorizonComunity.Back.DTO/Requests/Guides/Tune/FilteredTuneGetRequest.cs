namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;

public class FilteredTuneGetRequest : PaginationGetRequestBase
{
    public string SearchQuery { get; set; } = string.Empty;
}
