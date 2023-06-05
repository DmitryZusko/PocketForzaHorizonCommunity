using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Models;

namespace PocketForzaHorizonCommunity.Back.Services.Extensions;

public static class QueryableExtensions
{
    public static async Task<PaginationModel<TEntity>> PaginateAsync<TEntity>(
        this IQueryable<TEntity> query,
        int page,
        int pageSize
        ) where TEntity : EntityBase
    {
        var total = await query.CountAsync();
        if (pageSize < 1)
        {
            pageSize = total;
        }

        var result = query.Skip(page * pageSize).Take(pageSize).ToList();

        return new PaginationModel<TEntity>
        {
            Total = total,
            Page = page,
            PageSize = pageSize,
            Entities = result,
        };
    }

}
