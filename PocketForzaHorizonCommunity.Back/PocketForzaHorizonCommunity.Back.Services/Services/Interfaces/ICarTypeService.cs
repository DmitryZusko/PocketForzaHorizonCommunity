using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICarTypeService : IServiceBase<CarType>
    {
        Task<CarType> UpdateAsync(CarType newCarType);
    }
}