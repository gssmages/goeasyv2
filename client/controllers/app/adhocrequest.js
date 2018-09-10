angular.module('app').controller('app_adhocrequest', app_adhocrequest);
function app_adhocrequest($scope, app, $ionicPopup, $filter, $localStorage) {
    'use strict';
    app.init($scope, function () {
        
              var commonerror=$scope.data.errormsg;
    // console.log(success+"thisissuccesmsg");
      if(commonerror!=undefined)
         {
          var alertPopup = $ionicPopup.alert({
     title: 'Goeasy message',
     template: commonerror
   });

   alertPopup.then(function(res) {
  /*$scope.data.successmsg=undefined;*/
/* var params={"employeeID":$localStorage.employeeID,"locationID":$localStorage.locationID};
     app.call('goeasymethods.getAdhocdetails',params);*/
     var todaysdate=$filter('date')(new Date(), 'MM-dd-yyyy');
     var params={"employeeID":$localStorage.employeeID,"todaysdate":todaysdate,"locationname":$localStorage.locationName};
            app.call('goeasymethods.getDashboard',params);
   });
         }
         else
         {
       console.log('data objects ', $scope.data);
       var RequestTypeID ="";
       var RequestForID ="";
       var RequestForName ="";
       var shiftTiming ="";
       var shiftID ="";
       var boardingPointID="";
       var currentReqTime="";
       var areaID="";
       $scope.start_time=true;
       $scope.end_time=false;
       $scope.both_time=false;
        $scope.data.SpecialNeed =2;
        $scope.boardAreaId ="";
        $scope.data.PleaseSpecify="";
        $scope.data.Date=$filter('date')(new Date(), 'MM-dd-yyyy');
        $scope.data.FromDate=$filter('date')(new Date(), 'MM-dd-yyyy');
        $scope.data.ToDate=$filter('date')(new Date(), 'MM-dd-yyyy');
        $scope.boardingPoint= [];
        $scope.reqtype= $scope.data.adhocDataList[0].RequestTypeDetails;
        $scope.reqFor= $scope.data.adhocDataList[0].RequestForDetails;
        $scope.timing= $scope.data.adhocDataList[0].ShiftTimeDetails;
        $scope.area= $scope.data.adhocDataList[0].AreaDetails;
        $scope.specialNeedList = ["Please Specify","Pregnant","Undergoing Medical Treatment"];
        $scope.data.minDate = $filter('date')(new Date(), 'yyyy-MM-dd');
        var systemdate = new Date();
        systemdate.setMonth(systemdate.getMonth()+1,31);
        $scope.data.maxDate = $filter('date')(systemdate, 'yyyy-MM-dd');
        console.log('max date --> ',  $scope.data.maxDate);
             
             
        $scope.shiftSelection = function(item){
            // var date = new Date();
            // var hrs;
            //  if(date.getHours()/12 > 0)
            //     hrs = date.getHours()%12 + "PM"
            //  else hrs = date.getHours()%12 +"AM"
            shiftID = item.TimeID;
            shiftTiming = item.StartTime+"-"+item.EndTime;
            currentReqTime = $filter('date')(new Date(), 'MM-dd-yyyy HH:mm:ss');
            //console.log("shift selected-->"+JSON.stringify(item));
        }
        $scope.selectedBoarding = function(boardingselected){
            if(boardingselected)
            boardingPointID=boardingselected.BoardingPoint;
            //console.log("selected boardingPoint ID--->"+JSON.stringify(boardingPoint));
        }
       
        $scope.NeedCheck = function(){
            $scope.data.displaySpecify;
            if($scope.data.SpecialNeed === "1"){
                $scope.displaySpecify = true;
            }else{
                $scope.displaySpecify= false;
            }
        }
        
        $scope.areaSelect = function (item) {
           
        //     var i=0;
        //     for(i;i<$scope.data.adhocDataList[0].AreaDetails.length;i++){
                
        //     if ($scope.data.adhocDataList[0].AreaDetails[i].AreaName == $scope.data.selectedarea){
                
        //         $scope.boardAreaId = $scope.data.adhocDataList[0].AreaDetails[i].RelAreaID;
        //         break;
        //     }
        //   }
          $scope.boardAreaId = item.RelAreaID;
          areaID =item.AreaID;
          //console.log("area selected-->"+ areaID );
          //method to process json array as filter
           $scope.boardingPoint = $scope.data.adhocDataList[0].RelBoardingPointDetails.filter(function(d) {
                return d.Area === $scope.boardAreaId 
            });
        }
        
        $scope.typeChange = function (item) {
            //console.log('---Request Type id---' + JSON.stringify(item.RequestTypeName));
            RequestTypeID = item.RequestTypeID;
             var selectedReqTyp = item.RequestTypeName;
            // $scope.submitApprovals();
            switch (selectedReqTyp) {
            case 'Adhoc':
                $scope.dateField = true;
                $scope.fromDateField = false;
                $scope.toDateField = false;
                $scope.data.FromDate =$filter('date')(new Date(), 'MM-dd-yyyy');
                $scope.data.ToDate =$filter('date')(new Date(), 'MM-dd-yyyy');
                break;
            case 'Holiday':
                $scope.dateField = true;
                $scope.fromDateField = false;
                $scope.toDateField = false;
                $scope.data.FromDate =$filter('date')(new Date(), 'MM-dd-yyyy');
                $scope.data.ToDate =$filter('date')(new Date(), 'MM-dd-yyyy');
                break;
            case 'Month end':
                $scope.dateField = false;
                $scope.fromDateField = true;
                $scope.toDateField = true;
                $scope.data.Date = $filter('date')(new Date(), 'MM-dd-yyyy');
                break;
            default:
                //console.log('in default--' + selectedReqTyp);
                $scope.dateField = false;
                $scope.fromDateField = false;
                $scope.toDateField = false;
                break;
            }
        };
        
        $scope.reqForChange = function(item){
            //console.log("req for id-->"+item.RequestForID);
            RequestForID = item.RequestForID;
            RequestForName=item.RequestForName;
            if(RequestForName == "Pickup and Drop"){
                 $scope.start_time=false;
                 $scope.end_time=false;
                 $scope.both_time=true;
             }else if(RequestForName == "Pickup"){
                 $scope.start_time=true;
                 $scope.end_time=false;
                 $scope.both_time=false;
             }else{
                 $scope.start_time=false;
                 $scope.end_time=true;
                 $scope.both_time=false;
             }
        }
       
        var errorMsg = function(val){
            var alertPopup = $ionicPopup.alert({
                 title: 'Adhoc Error Message',
                 template: val
            });

             alertPopup.then(function(res) {
               // Custom functionality....
             });
        }
        
        $scope.validate = function(){
            if($scope.data.selectedreqtype && $scope.data.selectedreqFor 
                && $scope.data.selectedtiming && $scope.data.selectedarea 
                 && $scope.data.selectedboarding){
                 
                      if($scope.data.selectedreqtype.RequestTypeName === "Month end"){
                          if($scope.data.FromDate && $scope.data.ToDate)
                          {
                 var fromdatearray=($scope.data.FromDate).split('-');
                  var todatearray=($scope.data.ToDate).split('-');
               var fromdatestring = new Date(fromdatearray[2],fromdatearray[0]-1,fromdatearray[1]);
                var todatestring = new Date(todatearray[2],todatearray[0]-1,todatearray[1]);
                if(fromdatestring<=todatestring)
                {
                                if($scope.data.SpecialNeed === "1"){
                                    if($scope.data.PleaseSpecify){
                                        submitApprovals();
                                    }else{
                                        errorMsg('Please choose PleaseSpecify.');
                                    }
                                }else{
                                 submitApprovals();//specialneed=no
                                }
                }
                else{
                                        errorMsg('To Date must be greater than From Date.');
                                    }
                              }else{errorMsg('Please select FromDate and ToDate.');}
                        }else{ 
                            if($scope.data.Date){
                            
                                if($scope.data.SpecialNeed === "1"){
                                    if($scope.data.PleaseSpecify){
                                        submitApprovals();
                                    }else{
                                        errorMsg('Please choose PleaseSpecify.');
                                    }
                                }else{
                                 submitApprovals();//specialneed=no
                                }
                                
                            }else{
                                errorMsg('Please select Date.');
                            }
                        }
                }else{ errorMsg('Please select all the required field.'); }   
            }
            
        var submitApprovals = function () {
            //perform field validation befor submit
            //validate();
            
            //Data to be sent for Adhoc Request
            var EmployeeCabDetails = {
                LocationID: $localStorage.locationID,
                EmployeeID: $localStorage.employeeID,
                 EmployeeName: $localStorage.displayName,
                //LocationID: "1",
                RequestTypeID: RequestTypeID,
                RequestTypeName: $scope.data.selectedreqtype.RequestTypeName,
                RequestForID: RequestForID,
                RequestForName:$scope.data.selectedreqFor.RequestForName,
                FromDate: $scope.data.FromDate,
                Todate: $scope.data.ToDate,
                CommonDate: $scope.data.Date,
                UserTime:currentReqTime,
                Shift: shiftID,
                ShiftTimeName:shiftTiming,
                AreaID: areaID,
                AreaName: $scope.data.selectedarea.AreaName,
                BoardingPointID: boardingPointID,
                BoardingPointName:$scope.data.selectedboarding.BoardingPointName,
                SpecialNeed: $scope.data.SpecialNeed,
                SpecialNeedReason:$scope.data.PleaseSpecify,
                Reason: $scope.data.ReasonForAdhoc,
                CreatedBy:$localStorage.employeeID,
                StatusID:1,
                IsActive:1,
            };
            console.log("req Data--->"+JSON.stringify(EmployeeCabDetails));
            app.call('goeasymethods.adhocRequest', EmployeeCabDetails);
        };
        $scope.reset = function() {
            //reset all the field in the page.
            var params ={
                locationID: $localStorage.locationID,
                employeeID: $localStorage.employeeID,
            }
          app.call('goeasymethods.getAdhocdetails',params);
        }
         }
    });
}