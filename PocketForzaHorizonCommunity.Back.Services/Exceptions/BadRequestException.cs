using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;

namespace PocketForzaHorizonCommunity.Back.Services.Exceptions;

public class BadRequestException : ExceptionBase
{
    public BadRequestException() : base(Messages.BAD_REQUEST, StatusCodes.Status400BadRequest)
    {
    }
    public BadRequestException(string message) : base(message, StatusCodes.Status400BadRequest)
    {
    }
}
