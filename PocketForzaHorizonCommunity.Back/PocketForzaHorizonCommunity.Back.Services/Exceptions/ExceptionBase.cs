namespace PocketForzaHorizonCommunity.Back.Services.Exceptions;
using Microsoft.AspNetCore.Http;
using PocketForzaHorizonCommunity.Back.Services.Exceptionsl;

public class ExceptionBase : Exception
{
    public int StatusCode { get; }

    public ExceptionBase(string? message) : base(message ?? Messages.BAD_REQUEST) => StatusCode = StatusCodes.Status400BadRequest;

    public ExceptionBase(string? message, int statusCode) : base(message) => StatusCode = statusCode;
}
