using System;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class BuggyController : BaseApiController
  {
    private readonly DataContext _context;
    public BuggyController(DataContext context)
    {
      _context = context;
    }

    [Authorize]
    [HttpGet("auth")]
    public ActionResult<string> GetSecret() {
        return "secret text";
    }

    [HttpGet("not-found")]
    public ActionResult<AppUser> GetNotFound() {
        var notFoundUser = _context.Users.Find(-1);
        if ( notFoundUser == null ) return NotFound();

        return Ok(notFoundUser);
    }

    [HttpGet("server-error")]
    public ActionResult<string> GetServerError() {
        var notFoundUser = _context.Users.Find(-1);
        var stringToReturn = notFoundUser.ToString();

        return stringToReturn;
    }

    [HttpGet("bad-request")]
    public ActionResult<string> GetBadRequest() {
        return BadRequest("This is a bad request.");
    }
  }
}