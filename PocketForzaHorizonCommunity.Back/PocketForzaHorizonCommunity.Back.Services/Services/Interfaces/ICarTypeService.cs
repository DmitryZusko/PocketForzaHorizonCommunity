using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.Requests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICarTypeService : ICrudServiceBase<CarType, PaginationGetRequestBase>
    {
        Task<CarType> UpdateAsync(CarType newCarType);
    }
}