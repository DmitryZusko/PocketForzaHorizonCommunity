using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Models;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Extensions;
using PocketForzaHorizonCommunity.Back.Services.Services.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public abstract class ServiceBase<TRepo, TEntity, TGetRequest> : IServiceBase<TEntity, TGetRequest> where TEntity : EntityBase where TRepo : IRepositoryBase<TEntity> where TGetRequest : PaginationGetRequestBase
{
    protected TRepo _repository;
    public ServiceBase(TRepo repository) => _repository = repository;

    public virtual async Task<PaginationModel<TEntity>> GetAllAsync(TGetRequest request) =>
        await _repository.GetAll().PaginateAsync(request.Page, request.PageSize);

    public async Task<List<Guid>> GetAllIds() =>
        await _repository.GetAllIds().ToListAsync();

    public virtual async Task<TEntity> GetByIdAsync(Guid Id) =>
         await _repository.GetById(Id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

    public virtual async Task DeleteAsync(Guid id)
    {
        var entity = await _repository.GetById(id).FirstOrDefaultAsync() ?? throw new EntityNotFoundException();

        _repository.Delete(entity);
        await _repository.SaveAsync();
    }
}
