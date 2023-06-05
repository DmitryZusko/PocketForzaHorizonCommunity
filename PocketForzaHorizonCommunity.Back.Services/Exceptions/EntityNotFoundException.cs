using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;

namespace PocketForzaHorizonCommunity.Back.Services.Exceptions;

public class EntityNotFoundException : ExceptionBase
{
    public EntityNotFoundException() : base(Messages.ENTITY_NOT_FOUND, StatusCodes.Status404NotFound)
    {

    }
}
