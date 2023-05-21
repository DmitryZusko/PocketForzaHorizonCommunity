using PocketForzaHorizonCommunity.Back.DTO.DTOs.StatisticsDtos;

namespace PocketForzaHorizonCommunity.Back.DTO.DTOs.Auth;

public class UserDto
{
    public string Id { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public List<string> Roles { get; set; } = new List<string>();
    public GeneralStatisticsDto GeneralStatistics { get; set; } = null!;
    public CampaignStatisticsDto CampaignStatistics { get; set; } = null!;
    public OnlineStatisticsDto OnlineStatistics { get; set; } = null!;
    public RecordsStatisticsDto RecordsStatistics { get; set; } = null!;
    public ICollection<Guid> OwnedCarsByUsers { get; set; } = new List<Guid>();

}
