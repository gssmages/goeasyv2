angular.module('app').controller('app_alertwin', app_alertwin);
function app_alertwin($scope, app) {
    'use strict';
    app.init($scope,function(data){
       console.log(data.approvalconfirm);
     //$scope.cancellist=false;
    });
}