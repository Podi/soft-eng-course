using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FD64YT_week10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TesztController : ControllerBase
    {
        [HttpGet]
        [Route("corvinus/szerverido")]
        public IActionResult M1()
        {
            string pontosIdő = DateTime.Now.ToShortTimeString();

            return Ok(pontosIdő);
        }
    }
}
