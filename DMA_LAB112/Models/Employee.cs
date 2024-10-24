using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DMA_LAB112.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(50)]
        public string Name { get; set; }

        public int Age { get; set; }

        public string Address { get; set; }

        public ICollection<PhotoEmployee> PhotoEmployees { get; set; }
    }
}
