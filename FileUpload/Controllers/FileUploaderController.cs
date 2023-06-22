using FileUpload.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FileUpload.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FileUploaderController : ControllerBase
    {
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly IHttpContextAccessor httpContextAccessor;

        public FileUploaderController(IWebHostEnvironment _webHostEnvironment, IHttpContextAccessor _httpContextAccessor)
        {
            webHostEnvironment = _webHostEnvironment;
            httpContextAccessor = _httpContextAccessor;
        }

        [HttpPost]
        [Route("~/Api/UploadFile")]
        public IActionResult Upload(IFormFile file)
        {
            try
            {
                var path = Path.Combine(webHostEnvironment.WebRootPath, "uploads", file.FileName);
                using(var fileStream = new FileStream(path, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                var baseURl = httpContextAccessor.HttpContext.Request.Scheme + "://" +
                    httpContextAccessor.HttpContext.Request.Host +
                    httpContextAccessor.HttpContext.Request.PathBase;
                return Ok(new
                {
                    //fileName = baseURl + "/uploads/", file.FileName,
                    //fileSize = file.Length

                    fileName= Path.Combine(baseURl + "/uploads/", file.FileName) ,
                    fileSize = file.Length


                });
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("~/Api/UploadManyFiles")]
        public IActionResult UploadManyFiles(IFormFile[] files)
        {
            try
            {
                var baseURl = httpContextAccessor.HttpContext.Request.Scheme + "://" +
                  httpContextAccessor.HttpContext.Request.Host +
                  httpContextAccessor.HttpContext.Request.PathBase;
                var fileInfos = new List<FileInfoVM>();
                foreach (var file in files)
                {
                    var path = Path.Combine(webHostEnvironment.WebRootPath, "uploads", file.FileName);
                    using (var fileStream = new FileStream(path, FileMode.Create))
                    {
                        file.CopyTo(fileStream);
                    }

                    fileInfos.Add(new FileInfoVM
                    {
                        Name = Path.Combine(baseURl, "uploads", file.FileName),
                        Length = file.Length
                    }); 

                }
               
              
                return Ok(fileInfos);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("~/Api/AddDataWithFileProperty")]
        public IActionResult AddDataWithFileProperty([FromForm] EmployeeVM employee)
        {

            return Ok(employee);
        }

    }
}
