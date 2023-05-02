using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.SteamDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Steam;
using PocketForzaHorizonCommunity.Back.Services.Services;

namespace PocketForzaHorizonCommunity.Back.API.Controllers
{
    public class SteamController : ApplicationControllerBase
    {
        private readonly ISteamService _service;
        public SteamController(IMapper mapper, ISteamService service) : base(mapper) => _service = service;

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<AppNewsDto> GetNews([FromQuery] GetNewsRequest request)
        {
            var result = await _service.GetNews(request.Count, request.MaxLength);

            return _mapper.Map<AppNewsDto>(await _service.GetNews(request.Count, request.MaxLength));
        }

    }
}
