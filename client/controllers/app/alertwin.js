angular.module('app').controller('app_alertwin', app_alertwin);
function app_alertwin($scope, app) {
    'use strict';
    app.init($scope,function(data){
         
      
     //$scope.cancellist=false;
    });
      $scope.sendrequest=function(){
          var sendtoconfirm = '';
         var cabreqid= JSON.stringify(data.approvalinfo.cabRequestID);
         var statusid=data.approvalinfo.status;
         sendtoconfirm={"cabRequestID":cabreqid,"status":statusid,"approver":"880781","remarks":comments}
       console.log(sendtoconfirm);
          // app.call("goeasymethods.approvalrequest",sendtoconfirm);
      };
      
}