angular.module('app').controller('app_tripcancellation', app_tripcancellation);
function app_tripcancellation($scope, app,$filter,$ionicPopup,$localStorage) {
    'use strict';
    var selectid=0;
    app.init($scope,function(){
        $scope.date = $filter('date')(new Date(), 'MM-dd-yyyy');
        $scope.dbdate = $filter('date')(new Date(), 'yyyy-MM-dd');
        var fromdate=$filter('date')($scope.data.tripinfo.FromDateOpnNoShow==null?$scope.date:$scope.data.tripinfo.FromDateOpnNoShow.split('T')[0],'MM-dd-yyyy');
        var todate=$filter('date')($scope.data.tripinfo.ToDateOpnNoShow==null?$scope.date:$scope.data.tripinfo.ToDateOpnNoShow.split('T')[0],'MM-dd-yyyy');
        $scope.data.fromdate=$scope.data.tripinfo.FromDateOpnNoShow==null?$scope.date:fromdate;
        $scope.data.todate=$scope.data.tripinfo.ToDateOpnNoShow==null?$scope.date:todate;
        $scope.data.minDate=$scope.data.tripinfo.FromDateOpnNoShow==null?$scope.dbdate:$scope.data.tripinfo.FromDateOpnNoShow.split('T')[0];
        $scope.data.maxDate=$scope.data.tripinfo.ToDateOpnNoShow==null?'':$scope.data.tripinfo.ToDateOpnNoShow.split('T')[0];
        
         $scope.requestfor= $scope.data.tripinfo.RequestForDetails;
         //console.log(requestfor);
         var RequestForID="";
      /*  $scope.requestfor=[
            { RequestForID:"1",RequestForName:"Pickup and Drop"},
            { RequestForID:"2",RequestForName:"Pickup"},
            { RequestForID:"3",RequestForName:"Drop"}
            ];*/
            
       // console.log($scope.data.ma);
/*       $scope.requestfor = [];
        if ($scope.requestfor.length === 0) {
      if($scope.data.tripinfo.RequestForName=="Pickup and Drop")
      {
    $scope.requestfor=[
            { RequestForID:"1",RequestForName:"Pickup and Drop"},
            { RequestForID:"2",RequestForName:"Pickup"},
            { RequestForID:"3",RequestForName:"Drop"}
            ];
            $scope.data.reqfor = $scope.requestfor[0].RequestForName;
            selectid=1;
      }
      else if($scope.data.tripinfo.RequestForName=="Pickup"){
          
            $scope.requestfor=[
            { RequestForID:"2",RequestForName:"Pickup"}
            ];
            $scope.data.reqfor = $scope.requestfor[0].RequestForName;
            selectid=2;
      }
      else
      {
           $scope.requestfor=[
            { RequestForID:"3",RequestForName:"Drop"}
            ];
            $scope.data.reqfor = $scope.requestfor[0].RequestForName;
             selectid=3;
      }
  }*/
    
   /* $scope.requestfor = [];*/
     
    
    //loadOptions(); ng-focus="loadOptions()"
/*    $scope.loadOptions = function() {
  if ($scope.requestfor.length === 0) {
      if($scope.data.tripinfo.RequestForName=="Pickup and Drop")
      {
    $scope.requestfor=[
            { RequestForID:"1",RequestForName:"Pickup and Drop"},
            { RequestForID:"2",RequestForName:"Pickup"},
            { RequestForID:"3",RequestForName:"Drop"}
            ];
            $scope.data.reqfor = $scope.requestfor[0].RequestForName;
            
      }
      else if($scope.data.tripinfo.RequestForName=="Pickup"){
          
            $scope.requestfor=[
            { RequestForID:"2",RequestForName:"Pickup"}
            ];
            $scope.data.reqfor = $scope.requestfor[0].RequestForName;
            
      }
      else
      {
           $scope.requestfor=[
            { RequestForID:"3",RequestForName:"Drop"}
            ];
            $scope.data.reqfor = $scope.requestfor[0].RequestForName;
           
      }
  }
}*/
   $scope.reqForChange = function(item){
            //console.log("req for id-->"+item.RequestForID);
            RequestForID = item.RequestForID;
   };
 
/*$scope.GetValue = function (item) {
                var selectname = $scope.data.reqfor;
                selectid = $.grep($scope.requestfor, function (item) {
                    return item.RequestForName == selectname;
                })[0].RequestForID;
            }*/
     $scope.tripcancel = function(){
        // console.log($scope.data.reqfor.RequestForName+"fromdate"+$scope.fromdate+$scope.data.reqfor)
         var employeeID=$scope.data.tripinfo.employeeID;
        var locationID=$scope.data.tripinfo.locationID; 
        /*var RequestForID=parseInt(selectid, 10);*/
        var RequestForID=RequestForID;
        console.log(RequestForID+"--->selected id");
        var RequestTypeID=$scope.data.tripinfo.RequestTypeID;
        var RequestTypeName=$scope.data.tripinfo.RequestTypeName; 
        var RequestForName=$scope.data.reqfor;
         var RequestedForName=$scope.data.tripinfo.RequestForName;
        var ShiftTimeID=$scope.data.tripinfo.ShiftTimeID;
        var CabRequestID=$scope.data.tripinfo.CabRequestID;
        var FromDate=$scope.data.fromdate;
        var ToDate= $scope.data.todate;
        var ShiftTimeName=$scope.data.tripinfo.ShiftTimeName;
        var UserTime = $filter('date')(new Date(), 'MM-dd-yyyy HH:mm:ss');
         if(RequestForID!=0)
         {
             if(FromDate!='' && ToDate!='')
             {
                 console.log(FromDate);
                 var fromdatearray=FromDate.split('-');
                  var todatearray=ToDate.split('-');
               var fromdatestring = new Date(fromdatearray[2],fromdatearray[0]-1,fromdatearray[1]);
                var todatestring = new Date(todatearray[2],todatearray[0]-1,todatearray[1]);
                 console.log(fromdatestring);
                if(fromdatestring<=todatestring)
                {
         var tripinfo ={"locationID":locationID,"employeeID":employeeID,
         "RequestTypeName":RequestTypeName,"RequestForName":RequestForName,
         "ShiftTimeID":ShiftTimeID,"CabRequestID":CabRequestID,
         "RequestForID":RequestForID,"RequestTypeID":RequestTypeID,
         "FromDateOpnNoShow":FromDate,
         "ToDateOpnNoShow":ToDate,"RequestedForName":RequestedForName,"ShiftTimeName":ShiftTimeName,"UserTime":UserTime};
         console.log(tripinfo);
		app.call('goeasymethods.sendNoshow',tripinfo);
                }
                else
                {
                    errorMsg('To Date must be greater than From Date..');
                    
                }
             }
             else
             {
                  errorMsg('Please select From Date or To Date.');
             }
         }
         else
         {
             errorMsg('Please select Request For.');
         }

   };
    var errorMsg = function(val){
            var alertPopup = $ionicPopup.alert({
                 title: 'Trip Cancellation Error',
                 template:val
            });

             alertPopup.then(function(res) {
               // Custom functionality....
             });
        }
    });
}