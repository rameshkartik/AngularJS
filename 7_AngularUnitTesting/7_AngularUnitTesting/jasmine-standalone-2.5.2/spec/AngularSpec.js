describe("AngularTestGroup", function () {

    it("Angular must return sum", function () {
        module("MyAppl");
        var scope = {};
        inject(function ($controller) {
            $controller("MyContrllr", {$scope:scope});
        });
        scope.number1 = 2;
        scope.number2 = 3;
        scope.AddNew();
        expect(scope.total).toBe(5);;
    });
});