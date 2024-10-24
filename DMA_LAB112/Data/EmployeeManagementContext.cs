using DMA_LAB112.Models;
using Microsoft.EntityFrameworkCore;

namespace DMA_LAB112.Data
{
    public class EmployeeManagementContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<PhotoEmployee> PhotoEmployees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("DefaultConnection");
        }
    }
}
