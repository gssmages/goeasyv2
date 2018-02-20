angular.module('app').controller('app_mytrips', app_mytrips);
function app_mytrips($scope, app) {
    'use strict';
    app.init($scope,function(){
       
        //app.call('goeasymethods.getMytrips');
    });
     $scope.showdiv = function(data) {
        if(data=="one")
        {
             $scope.pickupdiv = true;
            $scope.dropdiv = false;
        }
        else
        {
             $scope.pickupdiv = false;
            $scope.dropdiv = true;
        }
    };
    $scope.noShowPopup = function(item){
        console.log("no show click...!!!");
     app.action('mytripstab', 'mytrips[item].cancel', this);
    //  app.call('tripcancellation');
    }
    
}

