using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ISteamService
    {
        Task<AppNews> GetNews(int count, int maxLength);
    }
}