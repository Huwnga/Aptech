using DMA_LAB112.Data;
using DMA_LAB112.Models;

namespace DMA_LAB112.Repositories
{
    public class EmployeeRepository : Repository<Employee>
    {
        public EmployeeRepository(EmployeeManagementContext context) : base(context) { }
    }
}
