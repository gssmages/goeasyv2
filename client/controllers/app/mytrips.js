angular.module('app').controller('app_mytrips', app_mytrips);
function app_mytrips($scope, app) {
    'use strict';
    app.init($scope,function(){
       
        //app.call('goeasymethods.getMytrips');
    });
    $scope.mytripslist=true;
     $scope.cancellist=false;
      $scope.noshowlist=false;
     $scope.showdiv = function(data) {
        if(data=="mytrips")
        {
             $scope.mytripslist = true;
           $scope.cancellist=false;
      $scope.noshowlist=false;
      $scope.tabselected1=true;
        }
        else  if(data=="cancel")
        {
              $scope.mytripslist = false;
           $scope.cancellist=true;
      $scope.noshowlist=false;
        }
        else
        {
                $scope.mytripslist = false;
           $scope.cancellist=false;
      $scope.noshowlist=true;
        }
    };
    $scope.noShowPopup = function(item){
        console.log("no show click...!!!");
     app.action('mytripstab', 'mytrips[item].cancel', this);
    //  app.call('tripcancellation');
    }
    
}

