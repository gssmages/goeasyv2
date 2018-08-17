angular.module('app').controller('app_feedback', app_feedback);
function app_feedback($scope, app) {
    'use strict';
    app.init($scope,function(){
         console.log('data objects ', $scope.data);
        // $scope.feedbackfor= $scope.data.adhocDataList[0].RequestTypeDetails;
         $scope.date = $filter('date')(new Date(), 'MM-dd-yyyy');
        $scope.dbdate = $filter('date')(new Date(), 'yyyy-MM-dd');
         $scope.data.maxDate=$scope.dbdate;
       /* $scope.feedbackfor = [];
         $scope.feedbackfor=[
            { RequestForID:"0",RequestForName:"Pickup and Drop"},
            { RequestForID:"1",RequestForName:"Pickup"},
            { RequestForID:"2",RequestForName:"Drop"}
            ];
            
            $scope.data.feedbackfor="Pickup and Drop";*/
            
             $scope.category = [];
         $scope.category=[
            { CategoryID:"0",CategoryName:"Vehicle"},
            { CategoryID:"1",CategoryName:"Route"},
            { CategoryID:"2",CategoryName:"Driver"},
            { CategoryID:"3",CategoryName:"Safety"},
            { CategoryID:"4",CategoryName:"Timing"}
            ];
              $scope.data.category="Vehicle";
        
    });
}