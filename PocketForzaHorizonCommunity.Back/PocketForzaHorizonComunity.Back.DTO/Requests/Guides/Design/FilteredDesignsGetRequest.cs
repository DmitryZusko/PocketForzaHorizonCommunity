namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;

public class FilteredDesignsGetRequest : PaginationGetRequestBase
{
    public int DescriptionLimit { get; set; } = 50;
    public string SearchQuery { get; set; } = string.Empty;
}
