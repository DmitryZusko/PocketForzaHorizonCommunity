using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.Auth;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ITokenService
    {
        Task<AuthTokenDto> GenerateAuthTokenAsync(ApplicationUser user);
        AuthTokenDto RefreshToken(string accessToken, string refreshToken);
    }
}