angular.module('app').controller('app_tripcancellation', app_tripcancellation);
function app_tripcancellation($scope, app) {
    'use strict';
    app.init($scope);
    
     $scope.tripcancel = function(){
     
		app.call('myapprovals.tripcancel', $scope.data);

   };
}