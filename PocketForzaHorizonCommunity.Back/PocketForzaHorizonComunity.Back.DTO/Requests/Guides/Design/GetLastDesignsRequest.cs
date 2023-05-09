namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;

public class GetLastDesignsRequest : PaginationGetRequestBase
{
    public int DescriptionLimit { get; set; } = 50;
}