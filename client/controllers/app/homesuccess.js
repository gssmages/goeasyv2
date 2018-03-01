angular.module('app').controller('app_homesuccess', app_homesuccess);
function app_homesuccess($scope, app,$filter,$localStorage,$ionicLoading) {
    'use strict';
    app.init($scope,function(){
        $ionicLoading.show({
      template: 'Loading...',
      duration: 3000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
         var todaysdate=$filter('date')(new Date(), 'MM-dd-yyyy');
          $localStorage.employeeID=$scope.data.home.EmployeeID;
           $localStorage.locationName=$scope.data.home.LocationName;
            $localStorage.locationID=$scope.data.home.LocationID;
         var params={"employeeID":$localStorage.employeeID,"todaysdate":todaysdate,"locationname":$localStorage.locationName};
            console.log(params);
            app.call('goeasymethods.getDashboard',params);
    });
}