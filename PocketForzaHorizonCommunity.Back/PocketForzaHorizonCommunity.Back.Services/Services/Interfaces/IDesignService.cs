using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Database.Entities.Guides;
using PocketForzaHorizonCommunity.Back.DTO.Requests;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

public interface IDesignService : IServiceBase<Design, PaginationGetRequestBase>
{
    Task<Design> CreateAsync(Design entity, IFormFile thumbnail, IList<IFormFile> gallery);
    Task<List<Design>> GetLastDesigns(int dessignAmount);
}
