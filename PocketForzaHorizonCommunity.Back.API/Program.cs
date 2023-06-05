using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PocketForzaHorizonCommunity.Back.API.Middlewares;
using PocketForzaHorizonCommunity.Back.API.ServiceConfig;
using PocketForzaHorizonCommunity.Back.Database;
using PocketForzaHorizonCommunity.Back.Database.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(opt =>
{
    opt.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

builder.Services.AddControllers().AddNewtonsoftJson();
builder.Services.AddRouting(opt => opt.LowercaseUrls = true);

builder.Services.AddIdentity<ApplicationUser, ApplicationRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

builder.Services.ConfigureAuthorization();
builder.Services.ConfigureAuthentication(builder.Configuration);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.ConfigureApplication(builder.Configuration);
builder.Services.ConfigureAutoMapper();
builder.Services.ConfigureValidator();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{

    using (var scope = app.Services.CreateScope())
    {
        scope.RunDevelopmentEnvironmentSeeder();
    }

}

app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PocketForzaHorizonApi"));

if (app.Environment.IsProduction())
{
    using (var scope = app.Services.CreateScope())
    {
        scope.MigrateDatabase();
        scope.RunProductionEnvironmentSeeder();
    }
}

app.UseMiddleware<ErrorHandlingMiddleware>();

app.UseRouting();

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
