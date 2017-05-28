using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeServer.Models
{
    public class Employee
    {
        public string EmployeeCode { get; set; }

        public string EmployeeName { get; set; }

        public double EmployeeSalary { get; set; }

        public DateTime SalesDateTime { get; set; }
    }
}