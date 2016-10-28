
"use strict";
angular.module("appName")
    .controller("personCtrl",["$scope",function($scope){
        
        $scope.tests="person_test"
        // Creating model for person form
        $scope.personModel = {
            firstName:"",
            lastName:"",
            address:"",
            phone:""
        };
        
        $scope.forNgShow = true;
        $scope.forNgIf = true;
        
        $scope.toggleForShow= function(){
            alert("this if for ng show");
        }
        
         $scope.toggleForIf= function(){
            alert("this if for ng if");
        }
         
         
        $scope.personModel.firstName="john";
        $scope.personModel.lastName="sam";
        $scope.personModel.address="Meadow creek";
        $scope.personModel.phone="123456789";
        
    }]);