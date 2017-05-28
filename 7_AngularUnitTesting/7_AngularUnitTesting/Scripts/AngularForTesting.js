/// <reference path="angular.js" />
var myApp = angular.module("MyAppl", []);
myApp.controller("MyContrllr", function ($scope) {
    $scope.number1 = 0;
    $scope.number2 = 0;
    $scope.total = 0;
    $scope.AddNew = function () {
        $scope.total = $scope.number1 + $scope.number2;
    }
}); 