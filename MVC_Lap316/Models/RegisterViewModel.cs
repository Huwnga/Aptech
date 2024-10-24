using System.ComponentModel.DataAnnotations;

namespace MVC_Lap316.Models
{
    public class RegisterViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        [Required]
        public string AddressHome { get; set; }

        [StringLength(15)]
        public string PhoneHome { get; set; }

        [Required]
        public string Job { get; set; }
    }
}
