angular.module('app').controller('app_homesuccess', app_homesuccess);
function app_homesuccess($scope, app,$filter,$localStorage,$ionicLoading,$ionicSideMenuDelegate) {
    'use strict';
    $ionicSideMenuDelegate.canDragContent(false);
    app.init($scope,function(){
         var todaysdate=$filter('date')(new Date(), 'MM-dd-yyyy');
          $localStorage.employeeID=$scope.data.home.EmployeeID;
           $localStorage.locationName=$scope.data.home.LocationName;
            $localStorage.locationID=$scope.data.home.LocationID;
            console.log($scope.data.home.LocationID+" "+$scope.data.home.LocationName);
         var params={"employeeID":$localStorage.employeeID,"todaysdate":todaysdate,"locationname":$localStorage.locationName};
            console.log(params);
            app.call('goeasymethods.getDashboard',params);
    });
}