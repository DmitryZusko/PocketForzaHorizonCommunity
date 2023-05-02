using Microsoft.Extensions.Configuration;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;
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

        if (!response.IsSuccessStatusCode) throw new ExceptionBase(response.Content.ToString(), (int)response.StatusCode);

        return response.Content.ReadAsAsync<News>().Result.AppNews;
    }
}
