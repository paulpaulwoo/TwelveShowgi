using Microsoft.AspNetCore.Mvc;

namespace Project1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {

        public TestController()
        {
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
            })
            .ToArray();
        }
    }
}