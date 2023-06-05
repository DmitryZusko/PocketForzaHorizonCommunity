using PocketForzaHorizonCommunity.Back.DTO.Requests.Steam;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamNews;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ISteamService
    {
        Task<AppNews> GetNews(GetNewsRequest request);
        Task<List<GlobalAchivement>> GetGlobalAchivementStats(GetAchievementsRequest request);
        Task<int> GetOnlineCount();
    }
}