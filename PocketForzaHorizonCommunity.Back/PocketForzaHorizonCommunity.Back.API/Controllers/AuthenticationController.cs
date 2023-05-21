using AutoMapper;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Enums.Roles;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.Auth;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Exceptionsl;
using PocketForzaHorizonCommunity.Back.Services.Services;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;
using System.Security.Claims;

namespace PocketForzaHorizonCommunity.Back.API.Controllers
{
    public class AuthenticationController : ApplicationControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationUserManager<ApplicationUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IStatisticsGenerator _statisticsGenerator;
        public AuthenticationController(
            IMapper mapper, SignInManager<ApplicationUser> signInManager,
            ApplicationUserManager<ApplicationUser> userManager, ITokenService tokenService, IStatisticsGenerator statisticsGenerator) : base(mapper)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _tokenService = tokenService;
            _statisticsGenerator = statisticsGenerator;
        }

        [HttpPost("sign-in")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<AuthTokenDto> SignIn([FromBody] SignInRequest request)
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

            return await _tokenService.GenerateAuthTokenAsync(user);
        }

        [HttpPost("google-sign-in")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<AuthTokenDto> GoogleSignIn([FromBody] GoogleSignInRequest request)
        {
            var payload = await GoogleJsonWebSignature.ValidateAsync(request.GoogleToken);

            if (payload == null)
            {
                throw new BadRequestException(Messages.INVALID_SIGN_IN);
            }

            var user = await _userManager.FindByEmailAsync(payload.Email);

            if (user == null)
            {
                user = await CreateUser(payload.Name, payload.Email, null);
                await _userManager.AddToRoleAsync(user, RoleType.USER);
            }

            return await _tokenService.GenerateAuthTokenAsync(user);
        }

        [HttpPost("sign-up")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<AuthTokenDto> SignUp([FromBody] SignUpRequest request)
        {
            var user = await CreateUser(request.Username, request.Email, request.Password);

            await _userManager.AddToRoleAsync(user, RoleType.USER);

            var token = await _tokenService.GenerateAuthTokenAsync(user);

            Response.StatusCode = StatusCodes.Status201Created;
            return token;
        }

        [HttpPost("refresh")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public AuthTokenDto RefreshToken([FromBody] RefreshTokensRequest request)
        {
            return _tokenService.RefreshToken(request.AccessToken, request.RefreshToken);
        }

        [HttpGet("me")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<UserDto> GetCurrentUser()
        {
            var user = await _userManager.LoadUser(User.FindFirstValue(ClaimTypes.NameIdentifier));

            if (user is null)
            {
                throw new EntityNotFoundException();
            }

            var userDto = _mapper.Map<UserDto>(user);
            userDto.Roles = (await _userManager.GetRolesAsync(user)).ToList();

            return userDto;
        }

        private async Task<ApplicationUser> CreateUser(string username, string email, string? password)
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
}
