angular.module("appName").directive("personTable",function(){
    return{
        //E->element
        //A->attribute
        //M->comments
        //C->classes
      restrict:"EAC",
      controller:'personCtrl',
      templateUrl:"/views/personTable.html",
       link:function($scope){
           console.log("Form directive");
           console.log($scope.personArray);
        }
    };
});