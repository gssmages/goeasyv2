angular.module('app').controller('app_home', app_home).config(function($compileProvider){
   $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel):/);
});
function app_home($scope, app, $localStorage) {
    'use strict';
    $scope.pickupDriverNumber ="";
    $scope.dropDriverNumber ="";
    app.init($scope,function(){
        
        //console.log('data in home page-->',$scope.data.home.PickupRequestDetail);
       $localStorage.displayName = $scope.data.home.EmployeeDetails.DisplayName;
       $localStorage.businessTitle = $scope.data.home.EmployeeDetails.BusinessTitle;
      
      
      //document.getElementById("pickupcontact").innerHTML=pickupDriverNumber;
//document.getElementById("pickupcontact").setAttribute("href", "tel:"+pickupDriverNumber);
     // document.getElementById('').attr("","tel:"+pickupDriverNumber);
      // $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|tel|coui):/);
      
       $scope.pickupdropdiv = true;
       $scope.nopickupdiv = false;
       $scope.pickupdiv; $scope.dropdiv;

    if($scope.data.home.PickupRequestDetail!==null || $scope.data.home.DropRequestDetail!==null)
     {
           $scope.pickupdropdiv = true;
            $scope.nopickupdiv = false;
              $scope.pickupdiv = true;
             $scope.dropdiv = false;
             $scope.pickupDriverNumber = $scope.data.home.PickupRequestDetail.DriverContact;
     $scope.dropDriverNumber =  $scope.data.home.DropRequestDetail.DriverContact;
     }
     else
     {
            $scope.pickupdropdiv = false;
       $scope.nopickupdiv = true;
       $scope.pickupdiv = false;
             $scope.dropdiv = false;
     }
    });
  
    $scope.showdiv = function(data) {
        if(data=="pickup")
        {
             $scope.pickupdiv = true;
            $scope.dropdiv = false;
        }
        else
        {
             $scope.pickupdiv = false;
            $scope.dropdiv = true;
        }
    };
    
}