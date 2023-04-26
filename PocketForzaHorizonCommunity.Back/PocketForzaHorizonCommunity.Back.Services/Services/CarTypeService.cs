using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class CarTypeService : ServiceBase<ICarTypeRepository, CarType>, ICarTypeService
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
