using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;
using PocketForzaHorizonCommunity.Back.DTO.Responses;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.API.Controllers;

[Authorize]
public class CarTypeController : ApplicationControllerBase
{
    private readonly ICarTypeService _service;
    public CarTypeController(IMapper mapper, ICarTypeService carTypeService) : base(mapper)
    {
        _service = carTypeService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<PaginatedResponse<CarTypeDto>> GetAll([FromQuery] PaginationGetRequestBase request)
        => _mapper.Map<PaginatedResponse<CarTypeDto>>(await _service.GetAllAsync(request));

    [HttpPost]
    [Authorize(Roles = "Administrator")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<CarTypeDto> CreateCarType([FromBody] CreateCarTypeRequest request)
    {
        var createdEntity = await _service.CreateAsync(_mapper.Map<CarType>(request));

        Response.StatusCode = StatusCodes.Status201Created;
        return _mapper.Map<CarTypeDto>(createdEntity);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "Administrator")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<CarTypeDto> UpdateCarType([FromBody] UpdateCarTypeRequest request)
    {
        var updatedEntity = await _service.UpdateAsync(_mapper.Map<CarType>(request));

        return _mapper.Map<CarTypeDto>(updatedEntity);
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "Administrator")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task Delete(string id)
    {
        if (!Guid.TryParse(id, out var entityId)) throw new BadRequestException();

        await _service.DeleteAsync(entityId);
    }
}
