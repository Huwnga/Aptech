using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MVC_Lap316.Models;

namespace MVC_Lap316.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Service> Services { get; set; }
        public DbSet<ServiceCategory> ServiceCategories { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Example data seeding
            builder.Entity<ServiceCategory>().HasData(
                new ServiceCategory { ServiceCategoryId = 1, ServiceCategoryName = "Category1", ServiceCategoryDescription = "Description1" },
                new ServiceCategory { ServiceCategoryId = 2, ServiceCategoryName = "Category2", ServiceCategoryDescription = "Description2" }
            );

            builder.Entity<Service>().HasData(
                new Service { ServiceId = 1, ServiceName = "Service1", Price = 100, ServiceNumber = 1, ServiceCategoryId = 1 },
                new Service { ServiceId = 2, ServiceName = "Service2", Price = 200, ServiceNumber = 2, ServiceCategoryId = 2 }
            );
        }
    }
}
