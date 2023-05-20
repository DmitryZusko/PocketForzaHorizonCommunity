using AutoMapper;
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

        [HttpPost("sign-up")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<AuthTokenDto> SignUp([FromBody] SignUpRequest request)
        {
            var user = new ApplicationUser
            {
                UserName = request.Username,
                Email = request.Email,
            };


            var result = await _userManager.CreateAsync(user, request.Password);

            if (!result.Succeeded)
            {
                throw new BadRequestException(Messages.INVALID_SIGN_UP);
            }

            user = await _userManager.FindByEmailAsync(request.Email);

            await _statisticsGenerator.GenerateStatistics(user);

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

            return userDto;
        }
    }
}
