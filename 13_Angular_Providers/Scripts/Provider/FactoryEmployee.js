function FactoryEmployee() {
    debugger;
    var _create = function (type) {
        if (type == "Simple") {
            return new Employee();
        }
        else if (type == "Normal") {
            return new NormalEmployee();
        }
        else if (type == "Special") {
            return new SplEmployee();
        }
    }
    return {
        Create : _create
        };

}