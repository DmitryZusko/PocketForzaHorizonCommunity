namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

public class FilteredCarsGetByIdsRequest : FilteredCarsGetRequest
{
    public string Ids { get; set; } = string.Empty;
}