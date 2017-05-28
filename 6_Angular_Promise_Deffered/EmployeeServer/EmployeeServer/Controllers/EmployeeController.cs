using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EmployeeServer.Models;
namespace EmployeeServer.Controllers
{
    public class EmployeeController : ApiController
    {
        List<Employee> empLst = new List<Employee>();

        public EmployeeController()
        {
            Employee e = new Employee();
            e.EmployeeName = "Ravi";
            e.EmployeeCode = "ASD1234";
            e.EmployeeSalary = 15000;
            e.SalesDateTime = DateTime.Now;

            empLst.Add(e);

            e = new Employee();
            e.EmployeeName = "Kavi";
            e.EmployeeCode = "BNM1234";
            e.EmployeeSalary = 15000;
            e.SalesDateTime = DateTime.Now;

            empLst.Add(e);

            e = new Employee();
            e.EmployeeName = "John";
            e.EmployeeCode = "JHJ1234";
            e.EmployeeSalary = 1000;
            e.SalesDateTime = DateTime.Now;

            empLst.Add(e);

        }


        // GET api/employee
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/employee/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/employee
        public List<Employee> Post(Employee emp)
        {
            empLst.Add(emp);
            return empLst;
        }

        // PUT api/employee/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/employee/5
        public void Delete(int id)
        {
        }
    }
}
