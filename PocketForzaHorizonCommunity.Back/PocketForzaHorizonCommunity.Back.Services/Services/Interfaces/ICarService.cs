using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.Cars;
using PocketForzaHorizonCommunity.Back.DTO.Requests.GetRequests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICarService : IServiceBase<Car, FilteredCarsGetRequest>
    {
        Task<Car> CreateAsync(Car entity, IFormFile thumbnail);
        Task<PaginationModel<Car>> GetDesignsByIdAsync(Guid id, int page, int pageSize);
        Task<PaginationModel<Car>> GetTunesByIdAsync(Guid Id, int page, int pageSize);
        Task<Car> UpdateAsync(Car newEntity, IFormFile thumbnail);
        Task<CarFilterScheme> GetCarFilterMarginsAsync();
    }
}