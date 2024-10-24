using DMA_LAB112.Data;
using DMA_LAB112.Models;
using Microsoft.AspNetCore.Mvc;

namespace DMA_LAB112.Controllers
{
    [Route("api/employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IRepository<Employee> _employeeRepository;

        public EmployeeController(IRepository<Employee> employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet("GetEmployees")]
        public IActionResult GetEmployees()
        {
            var employees = _employeeRepository.GetAll();
            return Ok(employees);
        }

        [HttpGet("DetailEmployee/{id}")]
        public IActionResult DetailEmployee(int id)
        {
            var employee = _employeeRepository.GetById(id);
            if (employee == null)
                return NotFound();
            return Ok(employee);
        }

        [HttpPost("AddEmployee")]
        public IActionResult AddEmployee(Employee employee)
        {
            _employeeRepository.Create(employee);
            return CreatedAtAction(nameof(DetailEmployee), new { id = employee.Id }, employee);
        }

        [HttpPut("EditEmployee/{id}")]
        public IActionResult EditEmployee(int id, Employee employee)
        {
            if (id != employee.Id)
                return BadRequest();

            var existingEmployee = _employeeRepository.GetById(id);
            if (existingEmployee == null)
                return NotFound();

            _employeeRepository.Update(employee);
            return NoContent();
        }
    }
}
