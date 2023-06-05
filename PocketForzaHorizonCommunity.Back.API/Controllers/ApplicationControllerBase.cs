using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace PocketForzaHorizonCommunity.Back.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Consumes("application/json")]
[Produces("application/json")]
public class ApplicationControllerBase : Controller
{
    protected readonly IMapper _mapper;
    public ApplicationControllerBase(IMapper mapper)
    {
        _mapper = mapper;
    }
}
