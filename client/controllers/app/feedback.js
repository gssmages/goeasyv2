angular.module('app').controller('app_feedback', app_feedback);
function app_feedback($scope, app) {
    'use strict';
    app.init($scope,function(){
        $scope.feedbackfor = [];
         $scope.feedbackfor=[
            { RequestForID:"0",RequestForName:"Pickup and Drop"},
            { RequestForID:"1",RequestForName:"Pickup"},
            { RequestForID:"2",RequestForName:"Drop"}
            ];
            
             $scope.category = [];
         $scope.category=[
            { CategoryID:"0",CategoryName:"Pickup and Drop"},
            { CategoryID:"1",CategoryName:"Pickup"},
            { CategoryID:"2",CategoryName:"Drop"}
            ];
        
    });
}