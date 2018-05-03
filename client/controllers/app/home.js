angular.module('app').controller('app_home', app_home);
function app_home($scope, app, $localStorage) {
    'use strict';
    var pickupDriverNumber ="";
    var dropDriverNumber ="";
    app.init($scope,function(){
        
        //console.log('data in home page-->',$scope.data.home.PickupRequestDetail);
       $localStorage.displayName = $scope.data.home.EmployeeDetails.DisplayName;
       $localStorage.businessTitle = $scope.data.home.EmployeeDetails.BusinessTitle;
      
      pickupDriverNumber = $scope.data.home.PickupRequestDetail.DriverContact;
      dropDriverNumber =  $scope.data.home.DropRequestDetail.DriverContact;
      
      document.getElementById("pickupcontact").setAttribute("href", "tel:"+pickupDriverNumber);
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