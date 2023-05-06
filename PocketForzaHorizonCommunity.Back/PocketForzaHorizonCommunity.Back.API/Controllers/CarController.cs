using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;
using PocketForzaHorizonCommunity.Back.DTO.Responses;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.API.Controllers;

public class CarController : ApplicationControllerBase
{
    private readonly ICarService _service;
    public CarController(IMapper mapper, ICarService carService) : base(mapper)
    {
        _service = carService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<PaginatedResponse<CarDto>> GetAllCars([FromQuery] FilteredCarsGetRequest request)
    {
        var cars = await _service.GetAllAsync(request);
        return _mapper.Map<PaginatedResponse<CarDto>>(cars);
    }

    [HttpGet("FilterScheme")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<CarFilterSchemeDto> GetCarFilterScheme() =>
        _mapper.Map<CarFilterSchemeDto>(await _service.GetCarFilterMarginsAsync());

    [HttpPost]
    [Consumes("multipart/form-data")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<CarDto> CreateCar([FromForm] CreateCarRequest request)
    {
        var newEntity = _mapper.Map<Car>(request);
        var createdEntity = await _service.CreateAsync(newEntity, request.Image);

        Response.StatusCode = StatusCodes.Status201Created;
        return _mapper.Map<CarDto>(createdEntity);
    }

    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<CarDto> UpdateCar([FromForm] UpdateCarRequest request)
    {
        var newEntity = _mapper.Map<Car>(request);
        var updateEntity = await _service.UpdateAsync(newEntity, request.Image);

        return _mapper.Map<CarDto>(updateEntity);
    }

    [HttpDelete("{id}")]
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
