angular.module('app').controller('app_menu', app_menu);
function app_menu($scope,app,$localStorage) {
    'use strict';
    app.init($scope,function(){
       //console.log("getting display name : "+$localStorage.displayName);
        //$scope.displayName = $localStorage.displayName;
        //$scope.businessTitle = $localStorage.businessTitle;
        if(($localStorage.locationName=="Chennai") || ($localStorage.locationName=="Pune"))
        {
            $scope.showfullmenu=true;
        }
        else
        {
            $scope.showfullmenu=false;
        }
    });
 
}
