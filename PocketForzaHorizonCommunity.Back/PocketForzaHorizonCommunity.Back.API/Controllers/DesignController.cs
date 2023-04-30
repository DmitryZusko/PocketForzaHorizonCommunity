using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;
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
    public async Task<PaginatedResponse<DesignDto>> GetAllDesigns([FromQuery] int page, int pageSize)
    {
        var designs = await _service.GetAllAsync(page, pageSize);

        return _mapper.Map<PaginatedResponse<DesignDto>>(designs);
    }

    [HttpGet("{id}/info")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<DesignFullInfoDto> GetFullInfo([FromForm] string id)
    {
        if (!Guid.TryParse(id, out var designId)) throw new BadRequestException();

        var design = await _service.GetByIdAsync(designId);

        return _mapper.Map<DesignFullInfoDto>(design);
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task CreateDesign([FromBody] CreateDesignRequest request)
    {
        var entity = _mapper.Map<Design>(request);
        await _service.CreateAsync(entity, request.Thumbnail, request.Gallery);

        Response.StatusCode = StatusCodes.Status201Created;
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task Delete(string id)
    {
        if (!Guid.TryParse(id, out var designId)) throw new BadRequestException();

        await _service.DeleteAsync(designId);
    }
}
