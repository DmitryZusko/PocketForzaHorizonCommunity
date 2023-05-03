using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamNews;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ISteamService
    {
        Task<AppNews> GetNews(int count, int maxLength);
        Task<List<GlobalAchivement>> GetGlobalAchivementStats();
        Task<int> GetOnlineCount();
    }
}