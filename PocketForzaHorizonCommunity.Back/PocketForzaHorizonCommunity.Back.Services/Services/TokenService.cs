using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.Auth;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class TokenService : ITokenService
{
    protected readonly string _secret;
    protected readonly int _tokenLifetimeSeconds;
    protected readonly SignInManager<ApplicationUser> _signInManager;

    public TokenService(IConfiguration config, SignInManager<ApplicationUser> manager)
    {
        _secret = config.GetValue<string>("Security:Secret");
        _tokenLifetimeSeconds = config.GetValue<int>("Security:TokenLifetimeSeconds");
        _signInManager = manager;
    }

    public async Task<AuthTokenDto> GenerateAuthTokenAsync(ApplicationUser user)
    {
        var userClaimsPrincipal = await _signInManager.CreateUserPrincipalAsync(user);
        var accessToken = GenerateJwtToken(userClaimsPrincipal.Claims);

        return new AuthTokenDto { AccessToken = accessToken, RefreshToken = GenerateRefreshToken(accessToken) };
    }

    public AuthTokenDto RefreshToken(string accessToken, string refreshToken)
    {
        var expirityDateTimeUtc = GetExpirityDateFromToken(accessToken);

        if (refreshToken != EncryptString(expirityDateTimeUtc.ToString()))
        {
            throw new BadRequestException(Messages.INVALID_REFRESH_TOKEN);
        }

        var validatedToken = GetPrincipalsFromToken(accessToken);

        var token = GenerateJwtToken(validatedToken.Claims);

        return new AuthTokenDto { AccessToken = token, RefreshToken = GenerateRefreshToken(token) };
    }

    protected string GenerateJwtToken(IEnumerable<Claim> claims)
    {
        var key = Encoding.UTF8.GetBytes(_secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            NotBefore = DateTime.UtcNow,
            Expires = DateTime.UtcNow.AddSeconds(_tokenLifetimeSeconds),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
            SecurityAlgorithms.HmacSha256),
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var securityToken = tokenHandler.CreateToken(tokenDescriptor);
        var token = tokenHandler.WriteToken(securityToken);

        return token;
    }

    protected string GenerateRefreshToken(string accessToken)
    {
        var expirityDateRimeUtc = GetExpirityDateFromToken(accessToken);
        return EncryptString(expirityDateRimeUtc.ToString());
    }


    protected DateTime GetExpirityDateFromToken(string token)
    {
        try
        {
            var validateToken = GetPrincipalsFromToken(token);
            var expirityDateUnix =
                long.Parse(validateToken.Claims.Single(x => x.Type == JwtRegisteredClaimNames.Exp).Value);
            var expirityDateUtc = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddSeconds(expirityDateUnix);

            return expirityDateUtc;
        }
        catch (Exception ex)
        {
            throw new BadRequestException(Messages.INVALID_TOKEN);
        }
    }

    protected ClaimsPrincipal GetPrincipalsFromToken(string token)
    {
        try
        {
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secret)),
                ValidateLifetime = true,
                ValidateIssuer = false,
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var principals = tokenHandler.ValidateToken(token, tokenValidationParameters, out var securityToken);
            var jwtToken = (JwtSecurityToken)securityToken;

            if (jwtToken == null || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
            {
                throw new BadRequestException(Messages.INVALID_TOKEN);
            };

            return principals;
        }
        catch (Exception ex)
        {
            throw new BadRequestException(Messages.INVALID_TOKEN);
        }
    }

    protected string EncryptString(string password)
    {
        var passwordBytes = Encoding.UTF8.GetBytes(password);
        var hasher = SHA256.Create();
        var hashedPassword = hasher.ComputeHash(passwordBytes);
        return Convert.ToBase64String(hashedPassword);
    }
}
