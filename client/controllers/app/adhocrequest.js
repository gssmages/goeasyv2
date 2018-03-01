angular.module('app').controller('app_adhocrequest', app_adhocrequest);
function app_adhocrequest($scope, app, $ionicPopup) {
    'use strict';
    app.init($scope, function () {
        console.log('data objects ', $scope.data);
       var RequestTypeID ="";
        $scope.data.SpecialNeed =2;
        $scope.boardAreaId ="";
        $scope.data.PleaseSpecify="";
        $scope.data.Date="";
        $scope.data.FromDate="";
        $scope.data.ToDate="";
        $scope.boardingPoint= [];
        $scope.reqtype= $scope.data.adhocDataList[0].RequestTypeDetails;
        $scope.reqFor= $scope.data.adhocDataList[0].RequestForDetails;
        $scope.timing= $scope.data.adhocDataList[0].ShiftTimeDetails;
        $scope.area= $scope.data.adhocDataList[0].AreaDetails
        $scope.specialNeedList = ["Please Specify","Pregnant","Undergoing Medical Treatment"];
         
        $scope.shiftSelection = function(){
            var date = new Date();
            var hrs;
             if(date.getHours()/12 > 0)
                hrs = date.getHours()%12 + "PM"
             else hrs = date.getHours()%12 +"AM"
            console.log("shift selected-->"+$scope.data.selectedtiming);
            
        }
        
        $scope.NeedCheck = function(){
            $scope.data.displaySpecify;
            if($scope.data.SpecialNeed === "1"){
                $scope.displaySpecify = true;
            }else{
                $scope.displaySpecify= false;
            }
        }
        
        $scope.areaSelect = function () {
            console.log("area selected-->"+ $scope.data.selectedarea);
            var i=0;
            for(i;i<$scope.data.adhocDataList[0].AreaDetails.length;i++){
                
            if ($scope.data.adhocDataList[0].AreaDetails[i].AreaName == $scope.data.selectedarea){
                
                $scope.boardAreaId = $scope.data.adhocDataList[0].AreaDetails[i].RelAreaID;
                break;
            }
          }
          
          //method to process json array as filter
           $scope.boardingPoint = $scope.data.adhocDataList[0].RelBoardingPointDetails.filter(function(d) {
                return d.Area === $scope.boardAreaId 
            });
        }
        
        $scope.typeChange = function (item) {
            console.log('---Request Type id---' + item.RequestTypeID);
             var selectedReqTyp = $scope.data.selectedreqtype;
            // $scope.submitApprovals();
            switch (selectedReqTyp) {
            case 'Adhoc':
                $scope.dateField = true;
                $scope.fromDateField = false;
                $scope.toDateField = false;
                break;
            case 'Holiday':
                $scope.dateField = true;
                $scope.fromDateField = false;
                $scope.toDateField = false;
                break;
            case 'Month end':
                $scope.dateField = false;
                $scope.fromDateField = true;
                $scope.toDateField = true;
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
            console.log("req for id-->"+item.RequestForID);
        }
        var errorMsg = function(){
            var alertPopup = $ionicPopup.alert({
                 title: 'Warning',
                 template: 'Please select all the required field.'
            });

             alertPopup.then(function(res) {
               // Custom functionality....
             });
        }
        
        $scope.validate = function(){
            if($scope.data.selectedreqtype && $scope.data.Date && $scope.data.selectedreqFor 
                && $scope.data.selectedtiming && $scope.data.selectedarea 
                 && $scope.data.selectedboarding){
                  if($scope.data.selectedreqtype =="Month end"){
                      if($scope.data.FromDate && $scope.data.ToDate){
                        //return;
                        submitApprovals();
                      }else{errorMsg();}
                    }else{ //return;
                        submitApprovals();
                    }
                }else{ errorMsg(); }   
            }
        
        var submitApprovals = function () {
            //perform field validation befor submit
            //validate();
            
            //Data to be sent for Adhoc Request
            var EmployeeCabDetails = {
                // LocationID: global_locationID,
                // EmployeeID: $('#EmpNumber').val(),
                // RequestTypeID: $('#ddlReqType').val(),
                RequestTypeName: $scope.data.selectedreqtype,
                //RequestForID: $('#ddlReqFor').val(),
                RequestForName:$scope.data.selectedreqFor,
                FromDate: $scope.data.FromDate,
                Todate: $scope.data.ToDate,
                CommonDate: $scope.data.Date,
                Shift: $scope.data.selectedtiming,
                // ShiftTimeName: $("#ddlShiftTime option:selected").text(),
                AreaID: $scope.boardAreaId,
                AreaName: $scope.data.selectedarea,
                // AreaName: $("#ddlArea option:selected").text(),
                //BoardingPointID: $('#ddlBoardingPoint').val(),
                BoardingPointName:$scope.data.selectedboarding,
                // BoardingPointName:$('#ddlBoardingPoint option:selected').text(),
                SpecialNeed: $scope.data.SpecialNeed,
                SpecialNeedReason:$scope.data.PleaseSpecify,
                // ManagerEmpID: $('#RepManagaerEmID').val(),
                Reason: $scope.data.ReasonForAdhoc,
                // ManagerMailID: $('#ManagerMailID').val(),
                // EmployeeName: $('#EmpDisplayName').val(),
                // ManagerName:$('#ManagerName').val(),
                // StatusID: StatusId,
                // IsActive: true,
                // EmpEmailID: $('#EmpEmail').val(),
                // OutOfBoundary:saveOUBdata,
            };
            console.log("req Data--->"+JSON.stringify(EmployeeCabDetails));
            app.call('goeasymethods.adhocRequest', EmployeeCabDetails);
        };
        $scope.reset = function() {
            //reset all the field in the page.
        }
    });
}