using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DMA_LAB112.Models
{
    public class PhotoEmployee
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }

        public string Url { get; set; }

        public DateTime CreatedDate { get; set; }

        [ForeignKey("Employee")]
        public int EmployeeId { get; set; }

        public Employee Employee { get; set; }
    }
}
