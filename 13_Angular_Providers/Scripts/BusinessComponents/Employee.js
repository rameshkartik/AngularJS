function Employee() {
    this.EmployeeName = "Rameshkartik";
    this.Employeecode = "ABC1212";
    this.EmployeeSalary = 2000;
    this.Mobile = "9845689890";
    this.validate = function () {
        debugger;
        if(this.EmployeeName.length == 0) {
            return false;
        }

        if (this.Employeecode.length == 0) {
            return false;
        }

        if (this.EmployeeSalary.length == 0) {
            return false;
        }

        return true;
    }

}

function NormalEmployee() {

    this.validate = function () {
        if (this.EmployeeSalary.length == 0) {
            return false;
        }
        return true;
    }
}

NormalEmployee.prototype = new Employee();
    
function SplEmployee() {

    this.validate = function () {
        if (this.Mobile.length == 0) {
            return false;
        }
        return true;
    }

}

SplEmployee.prototype = new Employee();