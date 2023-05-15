using Microsoft.Extensions.Configuration;
using PocketForzaHorizonCommunity.Back.API.Constants;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Steam;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.OnlinePlayerCount;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamAchivementStats;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamGameScheme;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto.SteamNews;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class SteamService : ISteamService
{
    private readonly IConfiguration _config;
    public SteamService(IConfiguration configuration) => _config = configuration;

    public async Task<AppNews> GetNews(int count = 5, int maxLength = 300)
    {
        using var client = HttpClientFactory.Create();
        var response = await client.GetAsync(
            $"{ApplicationConstants.STEAM_BASE_URL}ISteamNews/GetNewsForApp/v0002/?appid={ApplicationConstants.APP_ID}" +
            $"&count={count}&maxlength={maxLength}");

        if (!response.IsSuccessStatusCode) throw new ExceptionBase(response.ReasonPhrase, (int)response.StatusCode);

        return response.Content.ReadAsAsync<News>().Result.AppNews;
    }

    public async Task<List<GlobalAchivement>> GetGlobalAchivementStats(GetAchievementsRequest request)
    {
        using var client = HttpClientFactory.Create();
        var response = await client.GetAsync($"{ApplicationConstants.STEAM_BASE_URL}" +
            $"ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid={ApplicationConstants.APP_ID}");

        if (!response.IsSuccessStatusCode) throw new ExceptionBase(response.ReasonPhrase, (int)response.StatusCode);

        var globalAchivementStat = response.Content.ReadAsAsync<AchivementStats>().Result.AchievementPercentages.Achievements;

        return await CreateGlobalAchivements(globalAchivementStat, request.Amount);
    }

    public async Task<int> GetOnlineCount()
    {
        using var client = HttpClientFactory.Create();
        var response = await client.GetAsync($"{ApplicationConstants.STEAM_BASE_URL}" +
            $"ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid={ApplicationConstants.APP_ID}");

        if (!response.IsSuccessStatusCode) throw new ExceptionBase(response.ReasonPhrase, (int)response.StatusCode);

        return response.Content.ReadAsAsync<PlayerCountResponse>().Result.PlayerCount.PlayersCount;
    }

    private async Task<List<GlobalAchivement>> CreateGlobalAchivements(List<Achievement> achievements, int amount)
    {
        var achivementSchemes = await GetAchivementScheme();

        if (amount < 0) amount = achivementSchemes.Count;

        var globalAchivementStats = new List<GlobalAchivement>();

        foreach (var scheme in achivementSchemes.Take(amount))
        {
            var achivementStat = achievements.FirstOrDefault(a => a.Name == scheme.Name);
            globalAchivementStats.Add(new GlobalAchivement
            {
                Name = scheme.Name,
                DisplayName = scheme.DisplayName,
                Description = scheme.Description,
                Icon = scheme.Icon,
                GlobalScorePercent = achivementStat != null ? achivementStat.Percent : 0.0,
            });
        }

        return globalAchivementStats.OrderBy(a => a.GlobalScorePercent).ToList();
    }

    private async Task<List<AchievementScheme>> GetAchivementScheme()
    {
        using var client = HttpClientFactory.Create();
        var response = await client.GetAsync($"{ApplicationConstants.STEAM_BASE_URL}" +
            $"ISteamUserStats/GetSchemaForGame/v2/?key={_config["SteamApi:Key"]}&appid={ApplicationConstants.APP_ID}");

        if (!response.IsSuccessStatusCode) throw new ExceptionBase(response.ReasonPhrase, (int)response.StatusCode);

        return response.Content.ReadAsAsync<GameScheme>().Result.GameParams.AvailableGameStats.AchievementSchemes;
    }
}
