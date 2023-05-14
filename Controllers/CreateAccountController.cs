using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Newtonsoft.Json.Linq;
using System.Text.RegularExpressions;

namespace Project1.Controllers
{
    [ApiController]
    [Route("api/create-account")]
    public class CreateAccountController : ControllerBase
    {
        private readonly ILogger<CreateAccountController> _logger;
        public CreateAccountController(ILogger<CreateAccountController> logger)
        {
            _logger = logger;
        }


        [HttpPost]
        public IActionResult Post([FromBody] Credentials credentials)
        {

            _logger.LogInformation("Received request to create account");

            string username = credentials.username;
            string password = credentials.password;

            if (username == null || password == null)
            {
                Dictionary<string, string> error = new Dictionary<string, string>();
                error.Add("message", "Invalid username or password");
                error.Add("code", "1");

                return new BadRequestObjectResult(error);
            }



            string username_pattern = @"^[^\s\\]{8,15}$";
            string password_pattern = @"^[^\s\\]{8,15}$";
            if (!Regex.IsMatch(username, username_pattern) || !Regex.IsMatch(password, password_pattern))
            {
                Dictionary<string, string> error = new Dictionary<string, string>();
                error.Add("message", "Invalid username or password");
                error.Add("code", "1");
                return new BadRequestObjectResult(error);
            }

            using (SqlConnection conn = new SqlConnection(Database.connectionString))
            {
                conn.Open();
                string query = "SELECT * from users WHERE username = @username";
                SqlCommand command = new SqlCommand(query, conn);
                command.Parameters.AddWithValue("@username", username);
                SqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    //duplicate username
                    Dictionary<string, string> error = new Dictionary<string, string>();
                    error.Add("message", "Duplicate username");
                    error.Add("code", "2");
                    return new BadRequestObjectResult(error);

                }
                reader.Close();
                //all checks passed
                string cmd = "INSERT INTO users (username, password) VALUES (@username, @password)";
                command = new SqlCommand(cmd, conn);
                command.Parameters.AddWithValue("@username", username);
                command.Parameters.AddWithValue("@password", password);
                command.ExecuteNonQuery();
                return Ok();
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok();
        }

    }

}
