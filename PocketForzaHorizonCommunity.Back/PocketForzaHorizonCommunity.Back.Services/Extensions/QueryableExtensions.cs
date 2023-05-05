using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;

namespace PocketForzaHorizonCommunity.Back.Services.Extensions;

public static class QueryableExtensions
{
    public static async Task<PaginationModel<TEntity>> PaginateAsync<TEntity>(
        this IQueryable<TEntity> query,
        int page = 0,
        int pageSize = 25
        ) where TEntity : EntityBase
    {
        var total = await query.CountAsync();

        var totalPages = (int)Math.Ceiling((double)total / pageSize);

        var result = query.Skip(page * pageSize).Take(pageSize).ToList();

        return new PaginationModel<TEntity>
        {
            Total = total,
            TotalPages = totalPages,
            Page = page,
            PageSize = pageSize,
            Entities = result,
        };
    }
}
