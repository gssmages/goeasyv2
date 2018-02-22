angular.module('app').controller('app_tripcancellation', app_tripcancellation);
function app_tripcancellation($scope, app) {
    'use strict';
    app.init($scope,function(){
        $scope.fromdate="";
        $scope.todate="";
        $scope.data.mi="2018-02-21";
        $scope.data.ma="2018-02-23";
      /*  $scope.requestfor=[
            { RequestForID:"1",RequestForName:"Pickup and Drop"},
            { RequestForID:"2",RequestForName:"Pickup"},
            { RequestForID:"3",RequestForName:"Drop"}
            ];*/
            
        console.log($scope.data.ma);
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
     
		app.call('myapprovals.tripcancel', $scope.data);

   };
}