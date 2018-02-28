angular.module('app').controller('app', app);
function app($scope, app,$localStorage) {
    'use strict';
     app.init($scope,function(){
         $scope.displayName = '';
        $scope.businessTitle='';
       console.log("getting display name : "+$localStorage.displayName);
       // $scope.displayName = $localStorage.displayName;
        //$scope.businessTitle = $localStorage.businessTitle;
    });
}
