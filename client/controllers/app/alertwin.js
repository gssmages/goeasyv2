angular.module('app').controller('app_alertwin', app_alertwin);
function app_alertwin($scope, app, $ionicPopup,$localStorage) {
    'use strict';
    app.init($scope,function(data){
    });
      $scope.sendrequest=function(){
          var sendtoconfirm = '';
           var cabreqid= $scope.data.approvalinfo.cabRequestID;
          var cabid = [];
angular.forEach(cabreqid, function(value, key) {
  this.push(value);
}, cabid);
        var employeeID=$localStorage.employeeID;
         var statusid=$scope.data.approvalinfo.status;
         var comment=$scope.data.comments;
         if(statusid==2)
         {
             if($scope.data.comments)
             {
                  sendtoconfirm={"cabRequestID":cabid,"status":statusid,"approver":employeeID,"remarks":comment};
       console.log(sendtoconfirm);
          app.call("goeasymethods.approvalrequest",sendtoconfirm);
             }
             else
             {
                 errorMsg();
             }
       }
         else
         {
             sendtoconfirm={"cabRequestID":cabid,"status":statusid,"approver":"880781","remarks":comment};
       console.log(sendtoconfirm);
          app.call("goeasymethods.approvalrequest",sendtoconfirm);
             
         }
      };
       var errorMsg = function(){
            var alertPopup = $ionicPopup.alert({
                 title: 'Warning',
                 template: 'Please enter comments'
            });

             alertPopup.then(function(res) {
               // Custom functionality....
             });
        }
      
}