using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Entities.Cars;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces
{
    public interface ICarService : IServiceBase<Car, FilteredCarsGetRequest>
    {
        Task<Car> CreateAsync(Car entity, IFormFile thumbnail);
        Task<Car> UpdateAsync(Car newEntity, IFormFile thumbnail);
        Task<CarFilterScheme> GetCarFilterMarginsAsync();
    }
}