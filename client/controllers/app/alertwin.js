angular.module('app').controller('app_alertwin', app_alertwin);
function app_alertwin($scope, app) {
    'use strict';
    app.init($scope,function(data){
         var sendtoconfirm = '';
         sendtoconfirm={"cabRequestID":data.approvalinfo.cabRequestID,"status":data.approvalinfo.status,"approver":"880781","remarks":comments}
       console.log(sendtoconfirm);
      
     //$scope.cancellist=false;
    });
      $scope.submitApprovals=function(){
          // app.call("goeasymethods.approvalrequest",sendtoconfirm);
      };
      
}