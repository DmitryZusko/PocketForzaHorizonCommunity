using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface IManufactureService : IServiceBase<Manufacture>
    {
        Task<Manufacture> UpdateAsync(Manufacture newManufacture);
    }
}