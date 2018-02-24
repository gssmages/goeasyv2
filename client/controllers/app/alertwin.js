angular.module('app').controller('app_alertwin', app_alertwin);
function app_alertwin($scope, app, $ionicPopup) {
    'use strict';
    app.init($scope,function(data){
       
      
     //$scope.cancellist=false;
    });
      if($scope.data.approvalinfo.status !== undefined || $scope.data.approvalinfo.status  !== "")
         {
          var alertPopup = $ionicPopup.alert({
     title: 'Goeasy message',
     template: $scope.data.approvalinfo.status
   });

   alertPopup.then(function(res) {
     console.log('Reload same approval page');
     app.call('goeasymethods.getMyApprovals');
   });
         }
    
      $scope.sendrequest=function(){
          var sendtoconfirm = '';
           var cabreqid= $scope.data.approvalinfo.cabRequestID;
          var cabid = [];
angular.forEach(cabreqid, function(value, key) {
  this.push(value);
}, cabid);
        
         var statusid=$scope.data.approvalinfo.status;
         var comment=$scope.data.comments;
         sendtoconfirm={"cabRequestID":cabid,"status":statusid,"approver":"880781","remarks":comment};
       console.log(sendtoconfirm);
          app.call("goeasymethods.approvalrequest",sendtoconfirm);
      };
      
}