using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Services.Exceptionsl;

namespace PocketForzaHorizonCommunity.Back.Services.Exceptions;

public class BadRequestException : ExceptionBase
{
    public BadRequestException() : base(Messages.BAD_REQUEST, StatusCodes.Status400BadRequest)
    {
    }
}
