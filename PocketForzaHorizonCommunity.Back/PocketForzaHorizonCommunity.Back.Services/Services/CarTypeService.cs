﻿using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class CarTypeService : ServiceBase<ICarTypeRepository, CarType>
{
    public CarTypeService(ICarTypeRepository repository) : base(repository)
    {
    }

    public async Task<CarType> UpdateAsync(CarType newCarType)
    {
        var oldCarType = await _repository.GetById(newCarType.Id).FirstOrDefaultAsync();

        if (oldCarType == null)
        {
            throw new EntityNotFoundException();
        }

        oldCarType.Name = newCarType.Name;
        await _repository.SaveAsync();

        return oldCarType;
    }
}
