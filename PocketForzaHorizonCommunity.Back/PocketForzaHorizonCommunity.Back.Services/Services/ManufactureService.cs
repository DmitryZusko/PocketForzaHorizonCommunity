using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class ManufactureService : CrudServiceBase<IManufactureRepository, Manufacture, PaginationGetRequestBase>, IManufactureService
{
    public ManufactureService(IManufactureRepository repository) : base(repository)
    {
    }

    public async Task<Manufacture> UpdateAsync(Manufacture newManufacture)
    {
        var oldManufacture = await _repository.GetById(newManufacture.Id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        oldManufacture.Name = newManufacture.Name;
        oldManufacture.Country = newManufacture.Country;
        await _repository.SaveAsync();

        return oldManufacture;
    }
}
