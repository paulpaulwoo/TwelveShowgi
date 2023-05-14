using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Newtonsoft.Json.Linq;
using System.Text.RegularExpressions;


namespace Project1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var sql = "INSERT INTO users (username, password) VALUES ('johndoe', 'password123')";
            using (SqlConnection conn = new SqlConnection(Database.connectionString))
            {
                conn.Open();
                SqlCommand command = new SqlCommand(sql, conn);
                command.ExecuteNonQuery();
            }
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }

    /** <c>AccountCreationContoller</c> handles the account creation request from the user.*/
    
    
}
