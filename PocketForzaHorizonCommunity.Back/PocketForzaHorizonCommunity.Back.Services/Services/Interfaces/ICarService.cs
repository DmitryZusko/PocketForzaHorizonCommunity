using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICarService : IServiceWithFilesBase<Car>
    {
        Task<PaginationModel<Car>> GetDesignsByIdAsync(Guid id, int page, int pageSize);
        Task<PaginationModel<Car>> GetTunesByIdAsync(Guid Id, int page, int pageSize);
        Task<Car> UpdateAsync(Car newEntity, IFormFile thumbnail);
    }
}