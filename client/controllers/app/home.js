angular.module('app').controller('app_home', app_home);
function app_home($scope, app) {
    'use strict';
    app.init($scope,function(){
        //console.log('data in home page-->', $scope.data);
    });
    $scope.pickupdropdiv = true;
       $scope.nopickupdiv = false;
     if($scope.data.home.PickupRequestDetail !== 'null')
     {
    $scope.pickupdiv = true;
       $scope.dropdiv = false;
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
     else
     {
            $scope.pickupdropdiv = false;
       $scope.nopickupdiv = true;
     }
}