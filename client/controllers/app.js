angular.module('app').controller('app', app);
function app($scope, app,$localStorage,$filter) {
    'use strict';
     app.init($scope,function(){
         $scope.displayName = '';
        $scope.businessTitle='';
       console.log("getting display name : "+$localStorage.displayName);
       // $scope.displayName = $localStorage.displayName;
        //$scope.businessTitle = $localStorage.businessTitle;
    });
    
    setInterval(function(){
 $scope.displayName = $localStorage.displayName;
 $scope.businessTitle = $localStorage.businessTitle;
}, 1000);
   
    var todaysdate=$filter('date')(new Date(), 'MM-dd-yyyy');
    
 $scope.menudata = function(menuname) {
     var params='';
          console.log("calling mytrips in menu call");
        if(menuname=="mytrips")
        {
            params={"employeeID":$localStorage.employeeID,"todaysdate":todaysdate};
            console.log(params);
            app.call('goeasymethods.getMytrips',params);
        }
        else if(menuname=="dashboard")
        {
            params={"employeeID":$localStorage.employeeID,"todaysdate":todaysdate,"locationname":$localStorage.locationName};
            console.log(params);
            app.call('goeasymethods.getDashboard',params);
        }
        else if(menuname=="adhoc")
        {
            params={"employeeID":$localStorage.employeeID,"locationID":$localStorage.locationID};
            console.log(params);
            app.call('goeasymethods.getAdhocdetails',params);
        }
        else if(menuname=="myapprovals")
        {
            params={"employeeID":$localStorage.employeeID};
            console.log(params);
            app.call('goeasymethods.getMyApprovals',params);
        }
       
    };
}
