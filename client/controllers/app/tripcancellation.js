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
    $scope.requestfor=[
            { RequestForID:"1",RequestForName:"Pickup and Drop"},
            { RequestForID:"2",RequestForName:"Pickup"},
            { RequestForID:"3",RequestForName:"Drop"}
            ];
  }
}
     $scope.tripcancel = function(){
     
		app.call('goeasymethods.sendNoshow');

   };
}