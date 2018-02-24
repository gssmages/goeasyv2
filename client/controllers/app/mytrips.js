angular.module('app').controller('app_mytrips', app_mytrips);
function app_mytrips($scope, app,$ionicPopup) {
    'use strict';
    app.init($scope,function(){
       $scope.mytripslist=true;
     $scope.cancellist=false;
     if($scope.data.mytrips.CancelMyTripDetails=='')
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
        app.go("tripcancellation");
        console.log("no show click...!!!");
         //app.call('goeasymethods.getMytrips');
    // app.action('mytripstab', 'mytrips[item].cancel', this);
    //  app.call('tripcancellation');
    }
    
}

