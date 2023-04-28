using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface IManufactureService : ICrudServiceBase<Manufacture>
    {
        Task<Manufacture> UpdateAsync(Manufacture newManufacture);
    }
}