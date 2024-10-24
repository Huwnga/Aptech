using System.ComponentModel.DataAnnotations;

namespace MVC_Lap316.Models
{
    public class ServiceCategory
    {
        public int ServiceCategoryId { get; set; }

        [Required]
        public string ServiceCategoryName { get; set; }

        public string ServiceCategoryDescription { get; set; }
    }
}
