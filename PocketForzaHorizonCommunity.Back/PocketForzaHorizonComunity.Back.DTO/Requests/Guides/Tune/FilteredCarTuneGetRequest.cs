namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;

public class FilteredCarTuneGetRequest : FilteredTuneGetRequest
{
    public Guid CarId { get; set; }
}
