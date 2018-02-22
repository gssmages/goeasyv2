angular.module('app').controller('app_tripcancellation', app_tripcancellation);
function app_tripcancellation($scope, app) {
    'use strict';
    app.init($scope,function(){
        $scope.requestfor=[
            { "RequestForID":"1","RequestForName":"Pickup and Drop"},
            { "RequestForID":"2","RequestForName":"Pickup"},
            { "RequestForID":"3","RequestForName":"Drop"}
            ];
             $scope.names = ["Emil", "Tobias", "Linus"];
    });
     $scope.tripcancel = function(){
     
		app.call('myapprovals.tripcancel', $scope.data);

   };
}