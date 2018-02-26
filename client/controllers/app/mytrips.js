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
        var RequestForID=item.RequestForID;
        var RequestTypeID=item.RequestTypeID;
        var RequestTypeName=item.RequestTypeName; 
        var RequestForName=item.RequestTypeName;
        var ShiftTimeID=item.RequestTypeName;
        var CabRequestID=item.RequestTypeName;
        var FromDateOpnNoShow=item.FromDateOpnNoShow;
        var ToDateOpnNoShow=item.ToDateOpnNoShow;
         
         var tripinfo ={"locationID":locationID,"employeeID":employeeID,
         "RequestTypeName":RequestTypeName,"RequestForName":RequestForName,
         "ShiftTimeID":ShiftTimeID,"CabRequestID":CabRequestID,
         "FromDateOpnNoShow":FromDateOpnNoShow,
         "ToDateOpnNoShow":ToDateOpnNoShow};
        //app.call("goeasymethods.gettripinfo",tripinfo);
        console.log(tripinfo);
         //app.call('goeasymethods.getMytrips');
    // app.action('mytripstab', 'mytrips[item].cancel', this);
    //  app.call('tripcancellation');
    }
    
}

