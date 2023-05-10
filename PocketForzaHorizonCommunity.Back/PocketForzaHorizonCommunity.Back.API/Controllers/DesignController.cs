using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;
using PocketForzaHorizonCommunity.Back.DTO.Responses;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.API.Controllers;

public class DesignController : ApplicationControllerBase
{
    private readonly IDesignService _service;
    public DesignController(IMapper mapper, IDesignService designService) : base(mapper)
    {
        _service = designService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<PaginatedResponse<DesignDto>> GetAllDesignsAsync([FromQuery] FilteredDesignsGetRequest request) =>
        _mapper.Map<PaginatedResponse<DesignDto>>(await _service.GetAllAsync(request));

    [HttpGet("ByCar")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<PaginatedResponse<DesignDto>> GetAllDesignsByCarIdAsync([FromQuery] FilteredCarDesignsGetRequest request) =>
        _mapper.Map<PaginatedResponse<DesignDto>>(await _service.GetAllByCarIdAsync(request));


    [HttpGet("info")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<DesignFullInfoDto> GetFullInfo([FromQuery] string id)
    {
        if (!Guid.TryParse(id, out var designId)) throw new BadRequestException();

        var design = await _service.GetByIdAsync(designId);

        return _mapper.Map<DesignFullInfoDto>(design);
    }

    [HttpGet("GetLastDesigns")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<PaginatedResponse<DesignDto>> GetLastDesigns([FromQuery] GetLastDesignsRequest request) =>
        _mapper.Map<PaginatedResponse<DesignDto>>(await _service.GetLastDesigns(request));

    [HttpPost]
    [Consumes("multipart/form-data")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task CreateDesign([FromForm] CreateDesignRequest request)
    {
        var entity = _mapper.Map<Design>(request);
        await _service.CreateAsync(entity, request.Thumbnail, request.Gallery);

        Response.StatusCode = StatusCodes.Status201Created;
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task Delete(string id)
    {
        if (!Guid.TryParse(id, out var designId)) throw new BadRequestException();

        await _service.DeleteAsync(designId);
    }
}
