using Microsoft.EntityFrameworkCore.Query;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();


var app = builder.Build();

// Configure the HTTP request pipeline.


app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "create-account",
    pattern: "api/create-account",
    defaults: new { controller = "CreateAccount", action = "Get" });

app.MapFallbackToFile("index.html"); ;
app.MapControllers();
app.Run();
