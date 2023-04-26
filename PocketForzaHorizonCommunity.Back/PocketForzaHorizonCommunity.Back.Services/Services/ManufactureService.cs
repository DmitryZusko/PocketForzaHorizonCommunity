using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class ManufactureService : ServiceBase<IManufactureRepository, Manufacture>
{
    public ManufactureService(IManufactureRepository repository) : base(repository)
    {
    }

    public async Task<Manufacture> UpdateAsync(Manufacture newManufacture)
    {
        var oldManufacture = await _repository.GetById(newManufacture.Id).FirstOrDefaultAsync();

        if (oldManufacture == null)
        {
            throw new EntityNotFoundException();
        }

        oldManufacture.Name = newManufacture.Name;
        oldManufacture.Country = newManufacture.Country;
        await _repository.SaveAsync();

        return oldManufacture;
    }
}
