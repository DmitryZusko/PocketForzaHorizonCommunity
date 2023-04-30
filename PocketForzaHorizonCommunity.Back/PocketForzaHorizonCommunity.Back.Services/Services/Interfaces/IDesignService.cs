using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

public interface IDesignService : IServiceBase<Design>
{
    Task<Design> CreateAsync(Design entity, IFormFile thumbnail, IList<IFormFile> gallery);
}
