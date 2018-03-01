angular.module('app').controller('app_homesuccess', app_homesuccess);
function app_homesuccess($scope, app,$filter) {
    'use strict';
    app.init($scope,function(){
         var todaysdate=$filter('date')(new Date(), 'MM-dd-yyyy');
          $localStorage.employeeID=$scope.data.home.EmployeeID;
           $localStorage.locationName=$scope.data.home.LocationName;
            $localStorage.locationID=$scope.data.home.LocationID;
         var params={"employeeID":$localStorage.employeeID,"todaysdate":todaysdate,"location":$localStorage.locationName};
            console.log(params);
            app.call('goeasymethods.getDashboard',params);
    });
}