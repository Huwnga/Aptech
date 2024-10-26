using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace MVC_Lap316.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        public string AddressHome { get; set; }

        [StringLength(15)]
        public string PhoneHome { get; set; }

        [Required]
        public string Job { get; set; }
    }
}
