using PocketForzaHorizonCommunity.Back.Services.Exceptions;

namespace PocketForzaHorizonCommunity.Back.API.Middlewares;

public class ErrorHandlingMiddleware
{
    private readonly ILogger<ErrorHandlingMiddleware> _logger;
    private readonly RequestDelegate _next;

    public ErrorHandlingMiddleware(ILogger<ErrorHandlingMiddleware> logger, RequestDelegate requestDelegate)
    {
        _logger = logger;
        _next = requestDelegate;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (ExceptionBase ex)
        {
            await HandleExceptionAsync(context, ex, ex.StatusCode);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex, StatusCodes.Status500InternalServerError);
        }
    }

    public Task HandleExceptionAsync(HttpContext context, Exception ex, int statusCode)
    {
        var resultObject = new
        {
            Message = ex.Message,
            Errors = ex.Data,
            StackTrace = ex.StackTrace,
            StatusCode = statusCode
        };

        _logger.LogError("{message}, {code}, \n{stack}, \n{data}", statusCode, ex.Message, ex.StackTrace, ex.Data);

        context.Response.ContentType = "application/json";
        context.Response.StatusCode = statusCode;

        return context.Response.WriteAsJsonAsync(resultObject);
    }
}
