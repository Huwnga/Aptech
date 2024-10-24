using DMA_LAB112.Data;
using DMA_LAB112.Models;

namespace DMA_LAB112.Repositories
{
    public class PhotoEmployeeRepository : Repository<PhotoEmployee>
    {
        public PhotoEmployeeRepository(EmployeeManagementContext context) : base(context) { }
    }
}
