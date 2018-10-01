angular.module('app').controller('app_menu', app_menu);
function app_menu($scope,app,$localStorage) {
    'use strict';
    app.init($scope,function(){
       //console.log("getting display name : "+$localStorage.displayName);
        //$scope.displayName = $localStorage.displayName;
        //$scope.businessTitle = $localStorage.businessTitle;
        if(($localStorage.locationName=="Chennai") || ($localStorage.locationName=="Pune"))
        {
            console.log("getting full menu : "+$localStorage.locationName);
            $scope.showfullmenu=true;
        }
        else
        {
            console.log("getting full menu : "+$localStorage.locationName);
            $scope.showfullmenu=false;
        }
    });
 
}
