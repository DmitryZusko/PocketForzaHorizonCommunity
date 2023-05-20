﻿using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using PocketForzaHorizonCommunity.Back.Database.Entities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Services;

public class ApplicationUserManager<TUser> : UserManager<TUser> where TUser : class
{
    private readonly IApplicationUserRepository _userRepo;
    public ApplicationUserManager(IApplicationUserRepository userRepo, IUserStore<TUser> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<TUser> passwordHasher, IEnumerable<IUserValidator<TUser>> userValidators, IEnumerable<IPasswordValidator<TUser>> passwordValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, IServiceProvider services, ILogger<UserManager<TUser>> logger) : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
    {
        _userRepo = userRepo;
    }

    public async Task<ApplicationUser> LoadUser(string userId)
    {
        Guid.TryParse(userId, out var id);

        return await _userRepo.GetUserByIdAsync(id);
    }

}
