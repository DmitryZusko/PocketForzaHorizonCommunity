using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;
using PocketForzaHorizonCommunity.Back.DTO.Responses;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.API.Controllers;

public class TuneController : ApplicationControllerBase
{
    private readonly ITuneService _service;
    public TuneController(IMapper mapper, ITuneService tuneService) : base(mapper)
    {
        _service = tuneService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<PaginatedResponse<TuneDto>> GetAllTunesAsync([FromQuery] FilteredTuneGetRequest request) =>
        _mapper.Map<PaginatedResponse<TuneDto>>(await _service.GetAllAsync(request));

    [HttpGet("ByCar")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<PaginatedResponse<TuneDto>> GetAllTunesByCarIdAsync([FromQuery] FilteredCarTuneGetRequest request) =>
        _mapper.Map<PaginatedResponse<TuneDto>>(await _service.GetAllByCarIdAsync(request));

    [HttpGet("Ids")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<List<Guid>> GetallIds() => await _service.GetAllIds();

    [HttpGet("info")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<TuneFullInfoDto> GetFullInfo(string id)
    {
        if (!Guid.TryParse(id, out var tuneId)) throw new BadRequestException();

        var tune = await _service.GetByIdAsync(tuneId);

        return _mapper.Map<TuneFullInfoDto>(tune);
    }

    [HttpGet("GetLastTunes")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<List<TuneDto>> GetLastTunes([FromQuery] GetLastTunesRequest request) =>
        _mapper.Map<List<TuneDto>>(await _service.GetLastTunes(request.TunesAmount));

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task CreateTune([FromBody] CreateTuneRequest request)
    {
        await _service.CreateAsync(_mapper.Map<Tune>(request));

        Response.StatusCode = StatusCodes.Status201Created;
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task Delete(string id)
    {
        if (!Guid.TryParse(id, out var tuneId)) throw new BadRequestException();

        await _service.DeleteAsync(tuneId);
    }
}
