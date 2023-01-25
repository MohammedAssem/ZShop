using Microsoft.EntityFrameworkCore;
using ZShop.Api.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<ZShopContext>(
    sql => sql.UseSqlServer("Data Source=.;Initial Catalog=sndZshop;Integrated Security=True")
    );
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//  ==================
var app = builder.Build();
// ==============
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()
);
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
