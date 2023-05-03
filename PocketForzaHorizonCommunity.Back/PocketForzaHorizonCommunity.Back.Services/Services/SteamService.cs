using Microsoft.Extensions.Configuration;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;
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
            $"{_config["SteamApi:BaseUrl"]}ISteamNews/GetNewsForApp/v0002/?appid={_config["SteamApi:AppId"]}" +
            $"&count={count}&maxlength={maxLength}");

        if (!response.IsSuccessStatusCode) throw new ExceptionBase(response.ReasonPhrase, (int)response.StatusCode);

        return response.Content.ReadAsAsync<News>().Result.AppNews;
    }

    public async Task<List<GlobalAchivement>> GetGlobalAchivementStats()
    {
        using var client = HttpClientFactory.Create();
        var response = await client.GetAsync($"{_config["SteamApi:BaseUrl"]}" +
            $"ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid={_config["SteamApi:AppId"]}");

        if (!response.IsSuccessStatusCode) throw new ExceptionBase(response.ReasonPhrase, (int)response.StatusCode);

        var globalAchivementStat = response.Content.ReadAsAsync<AchivementStats>().Result.AchievementPercentages.Achievements;

        return await CreateGlobalAchivements(globalAchivementStat);
    }

    private async Task<List<GlobalAchivement>> CreateGlobalAchivements(List<Achievement> achievements)
    {
        var achivementSchemes = await GetAchivementScheme();

        var globalAchivementStats = new List<GlobalAchivement>();

        foreach (var scheme in achivementSchemes)
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

        return globalAchivementStats;
    }

    private async Task<List<AchievementScheme>> GetAchivementScheme()
    {
        using var client = HttpClientFactory.Create();
        var response = await client.GetAsync($"{_config["SteamApi:BaseUrl"]}" +
            $"ISteamUserStats/GetSchemaForGame/v2/?key={_config["SteamApi:Key"]}&appid={_config["SteamApi:AppId"]}");

        if (!response.IsSuccessStatusCode) throw new ExceptionBase(response.ReasonPhrase, (int)response.StatusCode);

        return response.Content.ReadAsAsync<GameScheme>().Result.GameParams.AvailableGameStats.AchievementSchemes;
    }
}
