using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using PocketForzaHorizonCommunity.Back.Database.Models.ImgurModels;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;
using System.Net.Http.Json;
using System.Text.RegularExpressions;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities;

public class ImageManager : IImageManager
{
    private IConfiguration _config;
    private readonly IAlbumRepository _albumRepo;
    private readonly string _carsAlbumName = "Cars";
    private readonly string _designalbumName = "Designs";
    private readonly string _baseUrl = "https://api.imgur.com/";

    public ImageManager(IConfiguration config, IAlbumRepository albumRepository)
    {
        _config = config;
        _albumRepo = albumRepository;
    }

    public async Task<string> SaveCarThumbnail(IFormFile image, string name)
    {
        var albumId = _albumRepo.GetAll()?.FirstOrDefault(x => x.Name == _carsAlbumName)?.ImgurId ?? throw new EntityNotFoundException();

        var accessToken = await GetAccesstoken();

        using var client = HttpClientFactory.Create();
        client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);

        var content = CreateContent(image, name, albumId);

        var response = await client.PostAsync($"{_baseUrl}3/upload", content);

        if (!response.IsSuccessStatusCode) throw new BadRequestException(response.ReasonPhrase);

        return (await response.Content.ReadAsAsync<ImgurResponseBase<MediaDataModel>>()).Data.Link;
    }

    public async Task<string> SaveDesignThumbnail(IFormFile image, string name)
    {
        var albumId = _albumRepo.GetAll()?.FirstOrDefault(x => x.Name == _designalbumName)?.ImgurId ?? throw new EntityNotFoundException();

        var accessToken = await GetAccesstoken();

        using var client = HttpClientFactory.Create();
        client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);

        var content = CreateContent(image, name, albumId);

        var response = await client.PostAsync($"{_baseUrl}3/upload", content);

        if (!response.IsSuccessStatusCode) throw new BadRequestException(response.ReasonPhrase);

        return (await response.Content.ReadAsAsync<ImgurResponseBase<MediaDataModel>>()).Data.Link;
    }

    public async Task<List<string>> SaveDesignGallery(IList<IFormFile> images, string designName)
    {
        var albumId = _albumRepo.GetAll()?.FirstOrDefault(x => x.Name == _designalbumName)?.ImgurId ?? throw new EntityNotFoundException();

        var result = new List<string>();

        var accessToken = await GetAccesstoken();

        var client = HttpClientFactory.Create();
        client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);

        for (var i = 0; i < images.Count; i++)
        {
            var content = CreateContent(images[i], $"{designName}_{i}", albumId);

            var response = await client.PostAsync($"{_baseUrl}3/upload", content);

            if (!response.IsSuccessStatusCode) throw new BadRequestException(response.ReasonPhrase);

            result.Add((await response.Content.ReadAsAsync<ImgurResponseBase<MediaDataModel>>()).Data.Link);
        }

        return result;
    }

    public async Task DeleteImages(List<string> imageUrls)
    {
        var accessToken = await GetAccesstoken();

        using var client = HttpClientFactory.Create();
        client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);

        foreach (var url in imageUrls)
        {
            var id = GetIdFromUrl(url);

            await client.DeleteAsync($"{_baseUrl}{id}");
        }
    }

    private async Task<string> GetAccesstoken()
    {
        using var client = HttpClientFactory.Create();
        var content = JsonContent.Create(new
        {
            refresh_token = _config.GetValue<string>("ImgurApi:Refresh_Token"),
            client_id = _config.GetValue<string>("ImgurApi:Client_Id"),
            client_secret = _config.GetValue<string>("ImgurApi:Secret"),
            grant_type = "refresh_token"
        });

        var response = await client.PostAsync($"{_baseUrl}oauth2/token", content);


        if (!response.IsSuccessStatusCode) throw new InternalServerException(response.ReasonPhrase);

        return (await response.Content.ReadAsAsync<ImgurAuthResponse>()).Access_Token;
    }

    private JsonContent CreateContent(IFormFile image, string name, string albumId)
    {
        return JsonContent.Create(new
        {
            Image = image,
            Type = "file",
            Name = name,
            Title = name,
            Album = albumId
        });
    }

    private string GetIdFromUrl(string url)
    {
        var regex = new Regex(@"\/\w{3, }\.");
        return regex.Match(url)
                    .ToString()
                    .Replace(@"\", "")
                    .Replace(".", "");
    }
}
