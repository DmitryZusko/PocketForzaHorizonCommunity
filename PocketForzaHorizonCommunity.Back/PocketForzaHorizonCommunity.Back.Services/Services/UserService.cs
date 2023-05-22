using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Enums.Roles;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Models.EmailModels;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Models.MessageOptions;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class UserService : IUserService
{
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly ApplicationUserManager<ApplicationUser> _userManager;
    private readonly IStatisticsGenerator _statisticsGenerator;
    private readonly IMailManager _mailManager;

    public UserService(SignInManager<ApplicationUser> signInManager,
            ApplicationUserManager<ApplicationUser> userManager, IStatisticsGenerator statisticsGenerator,
            IMailManager mailManager)
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _statisticsGenerator = statisticsGenerator;
        _mailManager = mailManager;
    }

    public async Task<ApplicationUser> SingInUserAsync(SignInRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email) ?? throw new BadRequestException(Messages.INVALID_CREDENTIALS);

        var result = await _signInManager.PasswordSignInAsync(user, request.Password, false, false);

        if (!result.Succeeded)
        {
            throw new BadRequestException(Messages.INVALID_CREDENTIALS);
        }

        return user;
    }

    public async Task<ApplicationUser> VerifyGoogleSingInAsync(GoogleSignInRequest request)
    {
        var payload = await GoogleJsonWebSignature.ValidateAsync(request.GoogleToken) ?? throw new BadRequestException(Messages.INVALID_CREDENTIALS);

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
        var user = await _userManager.LoadUser(userId) ?? throw new EntityNotFoundException();

        return user;
    }

    public async Task<List<string>> GetUserRoles(ApplicationUser user)
    {
        return (await _userManager.GetRolesAsync(user)).ToList();
    }

    public async Task SendEmailConfirmationMessageAsync(EmailConfirmationMessageRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.DestinationEmail);

        if (user == null) return;

        var confirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);

        var messageOptions = new EmailConfirmationOptions
        {
            DestinationEmail = request.DestinationEmail,
            UserId = user.Id,
            ConfirmationToken = confirmationToken,
        };

        _mailManager.SendEmail(messageOptions);
    }

    public async Task ConfirmEmailAsync(EmailConfirmationRequest request)
    {
        var normalizedtoken = request.ConfirmationToken.Replace(" ", "+");
        var user = await _userManager.FindByIdAsync(request.UserId) ?? throw new EntityNotFoundException();

        var result = await _userManager.ConfirmEmailAsync(user, normalizedtoken);

        if (!result.Succeeded)
        {
            throw new BadRequestException(Messages.INVALID_EMAIL_CONFIRMATION);
        }
    }

    public async Task SendPasswordRestorationMessageAsync(PasswordRestorationMessageRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);

        if (user == null) return;

        var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);

        var messageOptions = new ResetPasswordOptions
        {
            DestinationEmail = user.Email,
            UserId = user.Id,
            ResetToken = resetToken,
        };

        _mailManager.SendEmail(messageOptions);
    }

    public async Task ResetPasswordAsync(ResetPasswordRequest request)
    {
        var user = await _userManager.FindByIdAsync(request.UserId) ?? throw new EntityNotFoundException();
        var normalizedtoken = request.ResetToken.Replace(" ", "+");

        var result = await _userManager.ResetPasswordAsync(user, normalizedtoken, request.Password);

        if (!result.Succeeded) throw new BadRequestException(Messages.INVALID_CREDENTIALS);
    }

    private async Task<ApplicationUser> CreateUserAsync(string username, string email, string? password)
    {
        var user = new ApplicationUser
        {
            UserName = username,
            Email = email,
        };

        var result = password == null ? await _userManager.CreateAsync(user) : await _userManager.CreateAsync(user, password);

        if (!result.Succeeded)
        {
            throw new BadRequestException(Messages.INVALID_CREDENTIALS);
        }

        user = await _userManager.FindByEmailAsync(email);
        await _statisticsGenerator.GenerateStatistics(user);

        return user;
    }
}
