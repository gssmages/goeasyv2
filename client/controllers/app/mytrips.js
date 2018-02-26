angular.module('app').controller('app_mytrips', app_mytrips);
function app_mytrips($scope, app,$ionicPopup) {
    'use strict';
    app.init($scope,function(){
       $scope.mytripslist=true;
     $scope.cancellist=false;
     if($scope.data.mytrips.CancelTransportDetails==null)
     {
         $scope.recordlist=true;
     }
     else
     {
         $scope.recordlist=false;
     }
     // $scope.noshowlist=false;
        //app.call('goeasymethods.getMytrips');
    });
    
     $scope.showdiv = function(data) {
        if(data=="mytrips")
        {
             $scope.mytripslist = true;
           $scope.cancellist=false;
        }
        else  if(data=="cancel")
        {
              $scope.mytripslist = false;
           $scope.cancellist=true;
        }
    };
    $scope.noShowPopup = function(item){
        var employeeID=localStorage.employeeId;
        var locationID=1; 
        var RequestForID=localStaorage.employeeId;
        var RequestTypeID=localStaorage.employeeId;
        var RequestTypeName=localStaorage.employeeId; 
        var RequestForName=localStaorage.employeeId;
        var ShiftTimeID=localStaorage.employeeId;
        var CabRequestID=localStaorage.employeeId; 
        var FromDateOpnNoShow=localStaorage.employeeId;
        var ToDateOpnNoShow=localStaorage.employeeId;
         
         var tripinfo ={"locationID":locationID,"employeeID":employeeID,"RequestTypeName":"1","RequestForName":localStaorage.employeeId,"ShiftTimeID":"1","CabRequestID":localStaorage.employeeId,"FromDateOpnNoShow":localStaorage.employeeId,"ToDateOpnNoShow":localStaorage.employeeId};
        app.call("goeasymethods.gettripinfo",tripinfo);
        console.log("no show click...!!!");
         //app.call('goeasymethods.getMytrips');
    // app.action('mytripstab', 'mytrips[item].cancel', this);
    //  app.call('tripcancellation');
    }
    
}

