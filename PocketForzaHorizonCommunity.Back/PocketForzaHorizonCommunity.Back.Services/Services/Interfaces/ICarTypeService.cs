using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.Requests.GetRequests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICarTypeService : ICrudServiceBase<CarType, PaginationGetRequest>
    {
        Task<CarType> UpdateAsync(CarType newCarType);
    }
}