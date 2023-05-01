using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.API.Controllers;

public class CarTypeController : ApplicationControllerBase
{
    private readonly ICarTypeService _service;
    public CarTypeController(IMapper mapper, ICarTypeService carTypeService) : base(mapper)
    {
        _service = carTypeService;
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<CarTypeDto> CreateCarType([FromBody] CreateCarTypeRequest request)
    {
        var createdEntity = await _service.CreateAsync(_mapper.Map<CarType>(request));

        Response.StatusCode = StatusCodes.Status200OK;
        return _mapper.Map<CarTypeDto>(createdEntity);
    }

    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<CarTypeDto> UpdateCarType([FromBody] UpdateCarTypeRequest request)
    {
        var updatedEntity = await _service.UpdateAsync(_mapper.Map<CarType>(request));

        return _mapper.Map<CarTypeDto>(updatedEntity);
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task Delete(string id)
    {
        if (!Guid.TryParse(id, out var entityId)) throw new BadRequestException();

        await _service.DeleteAsync(entityId);
    }
}
