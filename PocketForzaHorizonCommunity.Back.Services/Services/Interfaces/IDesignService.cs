using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Models;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;

namespace PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

public interface IDesignService : IServiceBase<Design, FilteredDesignsGetRequest>
{
    Task<PaginationModel<Design>> GetAllByCarIdAsync(FilteredCarDesignsGetRequest request);
    Task<Design> CreateAsync(Design entity, IFormFile thumbnail, IList<IFormFile> gallery);
    Task<PaginationModel<Design>> GetLastDesigns(GetLastDesignsRequest request);
    Task<Design> SetRating(DesignRating request);
}
