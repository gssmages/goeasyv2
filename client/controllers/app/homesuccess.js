angular.module('app').controller('app_homesuccess', app_homesuccess);
function app_homesuccess($scope, app,$filter) {
    'use strict';
    app.init($scope,function(){
         var todaysdate=$filter('date')(new Date(), 'MM-dd-yyyy');
          var employeeID=$scope.data.home.EmployeeID;
           $localStorage.locationname=$scope.data.home.LocationName;
            $localStorage.locationID=$scope.data.home.LocationID;
           var todaysdate=$filter('date')(new Date(), 'MM-dd-yyyy');
         var params={"employeeID":$localStorage.employeeId,"todaysdate":todaysdate,"location":$localStorage.location};
            console.log(params);
            app.call('goeasymethods.getDashboard',params);
    });
}