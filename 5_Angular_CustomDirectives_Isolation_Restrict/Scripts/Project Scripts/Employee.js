function Employee(Utility) {
    this.EmployeeName = "Rameshkartik";
    this.EmployeeCode = "IJK1010";
    this.EmployeeSalary = 12000;
    this.SalesDateTime = Utility.getDate();
    this.CalculateDiscount = function () {
        alert("10");
    }
}


function SeniorEmployee(Utility) {
    this.EmployeeName = "Rameshkartik";
    this.EmployeeCode = "IJK1010";
    this.EmployeeSalary = 12000;
    this.SalesDateTime = Utility.getDate();
    this.CalculateDiscount = function () {
        alert("50");
    }
}

function Factory() {
    return {
        CreateEmployee: function (type,Utility) {

            if (type == 1) {
                return new Employee(Utility);
            } else {
                return new SeniorEmployee(Utility);
            }

        }
    }
    }
