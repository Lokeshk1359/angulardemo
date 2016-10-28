"use strict";
angular.module("appName")
    .controller("appCtrl",["$scope",function($scope){
        $scope.header="Hello World";
        $scope.tests="app_tests";
        $scope.test=function(){
            $scope.header="OH look it changed";
        }
        
        
    }]);