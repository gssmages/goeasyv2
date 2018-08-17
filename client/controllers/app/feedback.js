angular.module('app').controller('app_feedback', app_feedback);
function app_feedback($scope, app,$filter, $ionicPopup,$localStorage) {
    'use strict';
    app.init($scope,function(){
         console.log('data objects ', $scope.data);
        $scope.feedbackfor= $scope.data.feedbackdetails.ReqForList;
        $scope.category= $scope.data.feedbackdetails.QuestionList;
         $scope.date = $filter('date')(new Date(), 'MM-dd-yyyy');
        $scope.dbdate = $filter('date')(new Date(), 'yyyy-MM-dd');
        $scope.data.date=$scope.date;
         $scope.data.maxDate=$scope.dbdate;
         
        /* $scope.rating=0;*/
         
         var RequestForID='';
         var categoryid='';
       /* $scope.feedbackfor = [];
         $scope.feedbackfor=[
            { RequestForID:"0",RequestForName:"Pickup and Drop"},
            { RequestForID:"1",RequestForName:"Pickup"},
            { RequestForID:"2",RequestForName:"Drop"}
            ];
            
            $scope.data.feedbackfor="Pickup and Drop";*/
            
          /*   $scope.category = [];
         $scope.category=[
            { CategoryID:"0",CategoryName:"Vehicle"},
            { CategoryID:"1",CategoryName:"Route"},
            { CategoryID:"2",CategoryName:"Driver"},
            { CategoryID:"3",CategoryName:"Safety"},
            { CategoryID:"4",CategoryName:"Timing"}
            ];
              $scope.data.category="Vehicle";*/
              $scope.feedbackforchange = function (item) {
            RequestForID = item.RequestForID;
              };
              
                $scope.categorychange = function (item) {
            categoryid = item.F_ID;
              };
              
               $scope.validate = function(){
            if($scope.data.date && $scope.data.feedbackfor 
                && $scope.data.category && $scope.data.Comments){
                                         var feedbacks ={"employeeID": $localStorage.employeeID,
         "questionID":categoryid,"RequestForID":RequestForID,
         "comment":$scope.data.Comments,"date":$scope.data.date};
         console.log(feedbacks);
		/*app.call('goeasymethods.sendNoshow',tripinfo);*/
                                    }
                        else{ errorMsg('Please select all the required field.'); }   
            }
               var errorMsg = function(val){
            var alertPopup = $ionicPopup.alert({
                 title: 'Feedback Error Message',
                 template: val
            });

             alertPopup.then(function(res) {
               // Custom functionality....
             });
        }
        
    });
}