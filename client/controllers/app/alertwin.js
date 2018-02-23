angular.module('app').controller('app_alertwin', app_alertwin);
function app_alertwin($scope, app) {
    'use strict';
    app.init($scope,function(data){
         var sendtoconfirm = '';
         sendtoconfirm={"cabRequestID":$scope.data.approvalinfo,"status":"2","approver":"880781","remarks":comments}
       console.log(sendtoconfirm);
       app.call("goeasymethods.approvalconfirm",sendtoconfirm);
     //$scope.cancellist=false;
    });
}