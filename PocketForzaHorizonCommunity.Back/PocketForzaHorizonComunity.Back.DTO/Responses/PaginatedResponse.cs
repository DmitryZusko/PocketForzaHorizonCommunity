namespace PocketForzaHorizonCommunity.Back.DTO.Responses;

public class PaginatedResponse<TEntityDto> where TEntityDto : class
{
    public int Total { get; set; }
    public int Page { get; set; }
    public int PageSize { get; set; }
    public IEnumerable<TEntityDto> Entities { get; set; } = new List<TEntityDto>();
}
