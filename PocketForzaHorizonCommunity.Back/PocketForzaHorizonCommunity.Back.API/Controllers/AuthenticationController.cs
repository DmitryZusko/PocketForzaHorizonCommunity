using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.Auth;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;
using System.Security.Claims;

namespace PocketForzaHorizonCommunity.Back.API.Controllers
{
    public class AuthenticationController : ApplicationControllerBase
    {
        private readonly IUserService _userService;
        private readonly ITokenService _tokenService;
        public AuthenticationController(
            IMapper mapper,
            IUserService userService,
            ITokenService tokenService) : base(mapper)
        {
            _userService = userService;
            _tokenService = tokenService;
        }

        [HttpPost("sign-in")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<AuthTokenDto> SignIn([FromBody] SignInRequest request)
        {
            var user = await _userService.SingInUserAsync(request);

            return await _tokenService.GenerateAuthTokenAsync(user);
        }

        [HttpPost("google-sign-in")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<AuthTokenDto> GoogleSignIn([FromBody] GoogleSignInRequest request)
        {
            var user = await _userService.VerifyGoogleSingInAsync(request);

            return await _tokenService.GenerateAuthTokenAsync(user);
        }

        [HttpPost("sign-up")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<AuthTokenDto> SignUp([FromBody] SignUpRequest request)
        {
            var user = await _userService.SignUpUserAsync(request);

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
            var user = await _userService.GetCurrentUser(User.FindFirstValue(ClaimTypes.NameIdentifier));

            var userDto = _mapper.Map<UserDto>(user);
            userDto.Roles = await _userService.GetUserRoles(user);

            return userDto;
        }

        [HttpPost("send-verification-message")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> SendVerificationMessage([FromBody] EmailConfirmationMessageRequest request)
        {
            await _userService.SendEmailConfirmationMessageAsync(request);
            return Ok();
        }

        [HttpGet("verify-email")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> VerifyEmail([FromQuery] EmailConfirmationRequest request)
        {
            var result = await _userService.ConfirmEmailAsync(request);

            if (!result.Succeeded)
            {
                throw new BadRequestException(Messages.INVALID_EMAIL_CONFIRMATION);
            }

            return Ok();
        }
    }
}
