using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICarTypeService : ICrudServiceBase<CarType>
    {
        Task<CarType> UpdateAsync(CarType newCarType);
    }
}