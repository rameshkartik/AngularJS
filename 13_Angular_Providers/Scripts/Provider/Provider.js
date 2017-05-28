// provide things to the
// Angular controller ( bin der)
myApp.config(function ($provide) {

    $provide.constant("Constants", ProjectConstants);
    $provide.value("Values", ProjectValues);
    $provide.service("Utility", Utility);
    $provide.provider("FactoryEmployee", function () {
        var t = new FactoryEmployee();
        function _Create(_type) {
            return t.Create(_type);
        }
        return {
            $get: function () {
                return {
                    Create: _Create
                };
            }
        };

    });

});