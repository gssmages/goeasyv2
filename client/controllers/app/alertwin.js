angular.module('app').controller('app_alertwin', app_alertwin);
function app_alertwin($scope, app) {
    'use strict';
    app.init($scope,function(data){
         
      
     //$scope.cancellist=false;
    });
      $scope.sendrequest=function(){
          var sendtoconfirm = '';
         var cabreqid= JSON.stringify($scope.data.approvalinfo.cabRequestID);
         var statusid=$scope.data.approvalinfo.status;
         sendtoconfirm={"cabRequestID":cabreqid,"status":statusid,"approver":"880781","remarks":$scope.comments}
       console.log(sendtoconfirm);
          // app.call("goeasymethods.approvalrequest",sendtoconfirm);
      };
      
}