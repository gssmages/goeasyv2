angular.module('app').controller('app_menu', app_menu);
function app_menu($scope,app,$localStorage) {
    'use strict';
    app.init($scope,function(){
       //console.log("getting display name : "+$localStorage.displayName);
        //$scope.displayName = $localStorage.displayName;
        //$scope.businessTitle = $localStorage.businessTitle;
    });
    
    
 $scope.menudata = function(data) {
          console.log("calling mytrips in menu call");
        if(data=="mytrips")
        {
            var todaysdate=$filter('date')(new Date(), 'MM-dd-yyyy');
            var params={"employeeID":$localStorage.employeeId,"todaysdate":todaysdate};
            console.log(params);
            app.call('goeasymethods.getMytrips',params);
        }
       
    };
}
