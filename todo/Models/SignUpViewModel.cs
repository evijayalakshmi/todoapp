using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todo.Models {
    public class SignUpViewModel 
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class SecurityCodeViewModel 
    {
        public string Email { get; set; }
        public int Code { get; set; }
    }
}
