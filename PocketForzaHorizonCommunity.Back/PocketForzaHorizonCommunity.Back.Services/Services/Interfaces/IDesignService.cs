using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

public interface IDesignService : IServiceWithFilesBase<Design>
{
    Task<Design> CreateAsync(Design entity, IFormFile thumbnail, List<IFormFile> gallery);
}
