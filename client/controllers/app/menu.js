angular.module('app').controller('app_menu', app_menu);
function app_menu($scope,$location,$window, app,$localStorage) {
    'use strict';
    app.init($scope,function(){
        $scope.displayName = $localStorage.displayName;
        $scope.businessTitle = $localStorage.businessTitle;
    });
}
