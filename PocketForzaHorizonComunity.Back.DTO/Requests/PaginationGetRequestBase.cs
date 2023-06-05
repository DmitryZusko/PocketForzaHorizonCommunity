namespace PocketForzaHorizonCommunity.Back.DTO.Requests;

public class PaginationGetRequestBase
{
    public int Page { get; set; } = 0;
    public int PageSize { get; set; } = 25;
}
