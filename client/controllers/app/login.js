/*angular.module('app').controller('app_login', app_login);
function app_login($scope, app,$ionicLoading) {
    'use strict';
    app.init($scope);
  
} */

angular.module('app').controller('app_login', app_login);
function app_login($scope, app, $q,$ionicPopup, powwowLoginNew) {
    'use strict';
    app.init($scope,function(){
        //console.log("login-->"+$scope.data);
        
    });
    
    $scope.login = function () {
     
    var credentials = {'username': $scope.data.username, 'password': $scope.data.password};
    app.call('login.login', credentials);
    
    };
 
}