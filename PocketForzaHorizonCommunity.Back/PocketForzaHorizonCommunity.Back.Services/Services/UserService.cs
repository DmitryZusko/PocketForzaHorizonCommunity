using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Enums.Roles;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Exceptionsl;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class UserService : IUserService
{
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly ApplicationUserManager<ApplicationUser> _userManager;
    private readonly IStatisticsGenerator _statisticsGenerator;

    public UserService(SignInManager<ApplicationUser> signInManager,
            ApplicationUserManager<ApplicationUser> userManager, IStatisticsGenerator statisticsGenerator)
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _statisticsGenerator = statisticsGenerator;
    }

    public async Task<ApplicationUser> SingInUserAsync(SignInRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);
        if (user == null)
        {
            throw new BadRequestException(Messages.INVALID_SIGN_IN);
        }

        var result = await _signInManager.PasswordSignInAsync(user, request.Password, false, false);

        if (!result.Succeeded)
        {
            throw new BadRequestException(Messages.INVALID_SIGN_IN);
        }

        return user;
    }

    public async Task<ApplicationUser> VerifyGoogleSingInAsync(GoogleSignInRequest request)
    {
        var payload = await GoogleJsonWebSignature.ValidateAsync(request.GoogleToken);
        if (payload == null)
        {
            throw new BadRequestException(Messages.INVALID_SIGN_IN);
        }

        var user = await _userManager.FindByEmailAsync(payload.Email);
        if (user == null)
        {
            user = await CreateUserAsync(payload.Name, payload.Email, null);
            await _userManager.AddToRoleAsync(user, RoleType.USER);
        }

        return user;
    }

    public async Task<ApplicationUser> SignUpUserAsync(SignUpRequest request)
    {
        var user = await CreateUserAsync(request.Username, request.Email, request.Password);
        await _userManager.AddToRoleAsync(user, RoleType.USER);

        return user;
    }

    public async Task<ApplicationUser> SignUpWithSpecificRoleAsync(SignUpRequest request, string role)
    {
        var user = await CreateUserAsync(request.Username, request.Email, request.Password);
        await _userManager.AddToRoleAsync(user, role);

        return user;
    }

    public async Task<ApplicationUser> GetCurrentUser(string userId)
    {
        var user = await _userManager.LoadUser(userId);
        if (user is null)
        {
            throw new EntityNotFoundException();
        }

        return user;
    }

    public async Task<List<string>> GetUserRoles(ApplicationUser user)
    {
        return (await _userManager.GetRolesAsync(user)).ToList();
    }

    private async Task<ApplicationUser> CreateUserAsync(string username, string email, string? password)
    {
        var user = new ApplicationUser
        {
            UserName = username,
            Email = password,
        };

        var result = password == null ? await _userManager.CreateAsync(user) : await _userManager.CreateAsync(user, password);

        if (!result.Succeeded)
        {
            throw new BadRequestException(Messages.INVALID_SIGN_UP);
        }

        user = await _userManager.FindByEmailAsync(email);
        await _statisticsGenerator.GenerateStatistics(user);

        return user;
    }
}
