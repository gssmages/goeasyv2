angular.module('app').controller('app_mytrips', app_mytrips);
function app_mytrips($scope, app) {
    'use strict';
    app.init($scope);
    $scope.noShowPopup = function(item){
        console.log("no show click...!!!");
     app.action('mytripstab', 'mytrips[item].cancel', this);
    //  app.call('tripcancellation');
    }
    
}

