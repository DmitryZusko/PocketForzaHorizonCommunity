using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class ManufactureService : ServiceBase<IManufactireRepository, Manufacture>
{
    public ManufactureService(IManufactireRepository repository) : base(repository)
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
