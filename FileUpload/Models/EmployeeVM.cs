using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileUpload.Models
{
    public class EmployeeVM
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public IFormFile Image { get; set; }
    }
}
