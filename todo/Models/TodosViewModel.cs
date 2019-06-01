using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todo.Models {
    public class TodosViewModel 
    {
        public string Id { get; set; }
        public string Todo { get; set; }
        public bool Completed { get; set; }
    }
}
