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
    $scope.data.username="";
    $scope.data.password="";
    
    $scope.login = function () {
     if(($scope.data.username!="" || $scope.data.username!='undefined')  && ($scope.data.password!="" ||  $scope.data.password!='undefined'))
     {
    var credentials = {'username': $scope.data.username, 'password': $scope.data.password};
    app.call('login.login', credentials);
     }
     else
     {
         errorMsg();
     }
    
    };
    var errorMsg = function(){
            var alertPopup = $ionicPopup.alert({
                 title: 'Warning',
                 template: 'Please enter username and password.'
            });

             alertPopup.then(function(res) {
               // Custom functionality....
             });
        }
 
}