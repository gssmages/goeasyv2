angular.module('app').controller('app_tripcancellation', app_tripcancellation);
function app_tripcancellation($scope, app) {
    'use strict';
    app.init($scope,function(){
        $scope.fromdate="";
        $scope.todate="";
        $scope.data.minDate=$scope.data.tripinfo.FromDateOpnNoShow.split('T')[0];
        $scope.data.maxDate=$scope.data.tripinfo.ToDateOpnNoShow.split('T')[0];
      /*  $scope.requestfor=[
            { RequestForID:"1",RequestForName:"Pickup and Drop"},
            { RequestForID:"2",RequestForName:"Pickup"},
            { RequestForID:"3",RequestForName:"Drop"}
            ];*/
            
       // console.log($scope.data.ma);
    });
    $scope.requestfor = [];
    $scope.loadOptions = function() {
  if ($scope.requestfor.length === 0) {
      if($scope.data.tripinfo.RequestForName=="Pickup and Drop")
      {
    $scope.requestfor=[
            { RequestForID:"1",RequestForName:"Pickup and Drop"},
            { RequestForID:"2",RequestForName:"Pickup"},
            { RequestForID:"3",RequestForName:"Drop"}
            ];
      }
      else if($scope.data.tripinfo.RequestForName=="Pickup"){
          
            $scope.requestfor=[
            { RequestForID:"2",RequestForName:"Pickup"}
            ];
      }
      else
      {
           $scope.requestfor=[
            { RequestForID:"3",RequestForName:"Drop"}
            ];
      }
  }
}
     $scope.tripcancel = function(){
         var employeeID=$scope.data.tripinfo.employeeID;
        var locationID=$scope.data.tripinfo.locationID; 
        var RequestForID=$scope.reqfor.RequestForID;
        var RequestTypeID=$scope.data.tripinfo.RequestTypeID;
        var RequestTypeName=$scope.data.tripinfo.RequestTypeName; 
        var RequestForName=$scope.reqfor.RequestForName;
        var ShiftTimeID=$scope.data.tripinfo.ShiftTimeID;
        var CabRequestID=$scope.data.tripinfo.CabRequestID;
        var FromDate=$scope.fromdate;
        var ToDate= $scope.todate;
         
         var tripinfo ={"locationID":locationID,"employeeID":employeeID,
         "RequestTypeName":RequestTypeName,"RequestForName":RequestForName,
         "ShiftTimeID":ShiftTimeID,"CabRequestID":CabRequestID,
         "RequestForID":RequestForID,"RequestTypeID":RequestTypeID,
         "FromDateOpnNoShow":FromDate,
         "ToDateOpnNoShow":ToDate};
         console.log(tripinfo);
		//app.call('goeasymethods.sendNoshow');

   };
}