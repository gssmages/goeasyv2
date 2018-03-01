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
    
 $scope.menudata = function(data) {
     var params='';
          console.log("calling mytrips in menu call");
        if(data=="mytrips")
        {
            params={"employeeID":$localStorage.employeeID,"todaysdate":todaysdate};
            console.log(params);
            app.call('goeasymethods.getMytrips',params);
        }
        else if(data=="dashboard")
        {
            params={"employeeID":$localStorage.employeeID,"todaysdate":todaysdate,"locationname":$localStorage.locationName};
            console.log(params);
            app.call('goeasymethods.getDashboard',params);
        }
       
    };
}
