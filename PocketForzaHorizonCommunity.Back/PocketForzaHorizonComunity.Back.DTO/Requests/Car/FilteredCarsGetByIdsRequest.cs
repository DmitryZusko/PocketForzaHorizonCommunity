namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

public class FilteredCarsGetByIdsRequest : FilteredCarsGetRequest
{
    public List<Guid> Ids { get; set; } = new List<Guid>();
}