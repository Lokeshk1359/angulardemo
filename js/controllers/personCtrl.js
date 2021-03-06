"use strict";
angular.module("appName")
    .controller("personCtrl",["$scope",function($scope){
        $scope.tests="sample";
        //Creating model for person form
        $scope.personModel = {
            firstName:"",
            lastName:"",
            address:"",
            phoneNumber:""
        };
        
       // alert("sample");
        $scope.personArray=[
            {
                firstName:"aJohn",
                lastName:"aDoe",
                phoneNumber:"123-456-7890",
                address:"xyz line"
            },
            {
                firstName:"bJohn1",
                lastName:"bDoe1",
                phoneNumber:"123-456-7891",
                address:"xyz line1"
            },
            {
                firstName:"cJohn2",
                lastName:"cDoe2",
                phoneNumber:"123-456-7892",
                address:"xyz line2"
            },
            {
                firstName:"dJohn3",
                lastName:"dDoe3",
                phoneNumber:"123-456-7893",
                address:"xyz line3"
            },
            {
                firstName:"eJohn4",
                lastName:"eDoe4",
                phoneNumber:"123-456-7894",
                address:"xyz line4"
            },
            {
                firstName:"fJohn5",
                lastName:"fDoe5",
                phoneNumber:"123-456-7895",
                address:"xyz line5"
            }
        ]
//        console.log($scope.personArray);
        $scope.forNgShow = true;
        $scope.forNgIf =true;
        
        $scope.toggleForShow = function(){
            $scope.forNgShow = !$scope.forNgShow;
        }
        
        $scope.toggleForIf = function(){
             $scope.forNgIf = !$scope.forNgIf;
        }
        $scope.personModel.firstName="John";
        $scope.personModel.lastName="Doe";
        $scope.personModel.address="Some Address";
        $scope.personModel.phoneNumber="123-123-1234";
        
         $scope.personTable={
             sortBy:'firstName',
             sortOrder:false,
             toggleOrder:function(name){
                // alert(name);
                // $scope.personTable.sortBy=name;
                // $scope.personTable.sortOrder=!$scope.personTable.sortOrder;
                if($scope.personTable.sortBy!=name){
                     $scope.personTable.sortOrder=false;
                    $scope.personTable.sortBy=name;
                 }
                 else{
                     
                     $scope.personTable.sortOrder=!$scope.personTable.sortOrder;
                 }
             }
         };
         
        $scope.personForm={
                addPerson:function(){
                    var personObj={
                    firstName:$scope.personModel.firstName,
                    lastName:$scope.personModel.lastName,
                    phoneNumber:$scope.personModel.phoneNumber,
                    address:$scope.personModel.address 
                }
                    $scope.personArray.push(personObj);
                },
            
            deletePerson:function()
            {
            alert("delete");
            }
        
            
            }
        
        
    }]);