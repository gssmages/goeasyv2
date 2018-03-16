angular.module('app').controller('app_mytrips', app_mytrips);
function app_mytrips($scope, app,$ionicPopup,$localStorage,$filter) {
    'use strict';
    app.init($scope,function(){
        var errordata=$scope.data.errormsg;
         console.log(errordata + "---mytrips error msg");
         if(errordata!=undefined) {
            $scope.mytripslist=false;
            $scope.cancellist=false;
         }
         else
         {
            $scope.mytripslist=true;
            $scope.cancellist=false;
         }
    /*  var success=$scope.data.successmsg;
    // console.log(success+"thisissuccesmsg");
      if(success!=undefined)
         {
          var alertPopup = $ionicPopup.alert({
     title: 'Goeasy message',
     template: success
   });

   alertPopup.then(function(res) {
     $scope.data.successmsg=undefined;
     console.log('Reload mytrips page');
      var todaysdate=$filter('date')(new Date(), 'MM-dd-yyyy');
 var params={"employeeID":$localStorage.employeeID,"todaysdate":todaysdate};
     app.call('goeasymethods.getMytrips',params);
   });
         }*/
         var canceldata=$scope.data.mytrips;
         console.log(canceldata + "---checking mytrips details");
         if(canceldata!=undefined) {
     if($scope.data.mytrips.CancelTransportDetails==null)
     {
         $scope.recordlist=true;
     }
     else
     {
         $scope.recordlist=false;
     }
     if($scope.data.mytrips.CancelMyTripDetails==null)
     {
         $scope.cancelllist=true;
     }
     else
     {
         $scope.cancelllist=false;
     }
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
        var employeeID=$localStorage.employeeID;
        var locationID=1; 
        var RequestForID=item.RequestForID;
        var RequestTypeID=item.RequestTypeID;
        var RequestTypeName=item.RequestTypeName; 
        var RequestForName=item.RequestForName;
        var ShiftTimeID=item.ShiftTimeID;
        var CabRequestID=item.CabRequestID;
        var FromDate=item.FromDate;
        var ToDate=item.ToDate;
         
         var tripinfo ={"locationID":locationID,"employeeID":employeeID,
         "RequestTypeName":RequestTypeName,"RequestForName":RequestForName,
         "ShiftTimeID":ShiftTimeID,"CabRequestID":CabRequestID,
         "RequestForID":RequestForID,"RequestTypeID":RequestTypeID,
         "FromDateOpnNoShow":FromDate,
         "ToDateOpnNoShow":ToDate};
        app.call("goeasymethods.gettripinfo",tripinfo);
        //console.log(tripinfo);
         //app.call('goeasymethods.getMytrips');
    // app.action('mytripstab', 'mytrips[item].cancel', this);
    //  app.call('tripcancellation');
    }
    
}

