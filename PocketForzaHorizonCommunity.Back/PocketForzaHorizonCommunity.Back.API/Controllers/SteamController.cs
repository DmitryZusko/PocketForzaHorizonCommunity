using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.SteamDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Steam;
using PocketForzaHorizonCommunity.Back.DTO.ThirdPartyDto;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.API.Controllers
{
    public class SteamController : ApplicationControllerBase
    {
        private readonly ISteamService _service;
        public SteamController(IMapper mapper, ISteamService service) : base(mapper) => _service = service;

        [HttpGet("GetNews")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<AppNewsDto> GetNews([FromQuery] GetNewsRequest request)
        {
            return _mapper.Map<AppNewsDto>(await _service.GetNews(request.Count, request.MaxLength));
        }

        [HttpGet("GetAchivementStats")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<List<GlobalAchivementDto>> GetAchivementStats()
        {
            return _mapper.Map<List<GlobalAchivement>, List<GlobalAchivementDto>>(await _service.GetGlobalAchivementStats());
        }

        [HttpGet("GetCurrentOnlineCount")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<int> GetCurrentOnlineCount()
        {
            return await _service.GetOnlineCount();
        }
    }
}
