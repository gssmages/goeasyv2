angular.module('app').controller('app_home', app_home);
function app_home($scope, app) {
    'use strict';
    app.init($scope);
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