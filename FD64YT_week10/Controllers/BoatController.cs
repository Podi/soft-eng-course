using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FD64YT_week10.Models;

namespace FD64YT_week10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {
        [HttpGet]
        [Route("questions/count")]
        public int M1()
        {
            HajosTesztContext context = new();
            var kerdesekSzama = context.Questions.Count();
            return kerdesekSzama;
        }

        [HttpGet]
        [Route("questions/{sorszam}")]
        public ActionResult M2(int sorszam)
        {
            HajosTesztContext context = new();
            var kerdes = (from x in context.Questions
                          where x.QuestionId == sorszam
                          select x).FirstOrDefault();

            if (kerdes == null) return BadRequest("Nincs ilyen kérdés");
            return new JsonResult(kerdes);
        }
    }
}
