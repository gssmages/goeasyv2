angular.module('app').controller('app', app);
function app($scope, app,$localStorage,$ionicPopup,$filter) {
    'use strict';
    
         if (window.isPlatform && window.isPlatform.powWow() && window.isPlatform.iOS() && window.cordova && window.cordova.plugins) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        }
 
        if (window.StatusBar) {
            StatusBar.hide();
            document.body.classList.add('nostatusbar');
        }

        if (window.screen && window.screen.orientation) {
            screen.orientation.lock('portrait');
        }
        
     app.init($scope,function(){
        $scope.displayName = '';
        $scope.businessTitle='';
       console.log("getting display name : "+$localStorage.displayName);
       // $scope.displayName = $localStorage.displayName;
        //$scope.businessTitle = $localStorage.businessTitle;
    });
    
app.loginScreen = 'app.login';
app.loginModel = 'login';
app.loginAction = 'login';
app.loginErrorField = 'errorMessage';
app.loginIsAction = false;
    
    setInterval(function(){
 $scope.displayName = $localStorage.displayName;
 $scope.businessTitle = $localStorage.businessTitle;
}, 1000);
   
   if(($localStorage.locationName=="Chennai") || ($localStorage.locationName=="Pune"))
        {
            console.log("getting full menu : "+$localStorage.locationName);
            $scope.showfullmenu=true;
        }
        else
        {
            console.log("getting full menu : "+$localStorage.locationName);
            $scope.showfullmenu=false;
        }
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
         else if(menuname=="feedback")
        {
            params={"employeeLocID":$localStorage.locationID};
            console.log(params);
            app.call('goeasymethods.showFeedback',params);
        }
        else if(menuname=="sos")
        {
            var confirmPopup = $ionicPopup.confirm({
             title: 'SOS',
             template: 'Do you really need help'
             });
                 
         confirmPopup.then(function(res) {
            if(res) {
                 console.log('yes!I am in emergency ');
                 if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(handle_geolocation_query,getPositionError,{timeout: 3000, enableHighAccuracy: true});
                    } else { 
                    x.innerHTML = "Geolocation is not supported by this browser.";
                 }
                } else {
                    console.log('Not I am not!');
                }
                 
            });
            
        }
    };
    function handle_geolocation_query(position) {
        //pass latitude and longitude to server as params in server 
    //     var sosData = {
    //     "employeeID":$localStorage.employeeID,
    //     "Lat"  : position.coords.latitude,
    //     "Lon" :position.coords.longitude
    //   }
    //   app.call('goeasymethods.sos',sosData);
     console.log("Latitude: " + position.coords.latitude +"--Longitude: " + position.coords.longitude);
    }
    function getPositionError(errorMsg){
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        // template: errorMsg.message
        template:"Unable to get your loaction, make sure loaction is enabled in settings and try again."
      });
      
    }
}
