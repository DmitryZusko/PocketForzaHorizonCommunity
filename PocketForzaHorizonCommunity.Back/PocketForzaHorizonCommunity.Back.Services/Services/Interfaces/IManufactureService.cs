using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.Requests.GetRequests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface IManufactureService : ICrudServiceBase<Manufacture, PaginationGetRequest>
    {
        Task<Manufacture> UpdateAsync(Manufacture newManufacture);
    }
}