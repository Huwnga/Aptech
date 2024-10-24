using Microsoft.AspNetCore.Mvc;

namespace MVC_Lap316.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
