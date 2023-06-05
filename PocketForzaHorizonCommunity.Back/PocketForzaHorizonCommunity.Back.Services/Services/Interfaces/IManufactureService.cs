using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.Requests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface IManufactureService : ICrudServiceBase<Manufacture, PaginationGetRequestBase>
    {
        Task<Manufacture> UpdateAsync(Manufacture newManufacture);
    }
}