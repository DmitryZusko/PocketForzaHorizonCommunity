using Microsoft.AspNetCore.Http;

namespace PocketForzaHorizonCommunity.Back.Services.Exceptions;

public class InternalServerException : ExceptionBase
{
    public InternalServerException(string? message) : base(message, statusCode: StatusCodes.Status500InternalServerError)
    {
    }
}
