angular.module('app').controller('app_adhocrequest', app_adhocrequest);
function app_adhocrequest($scope, app, $ionicPopup) {
    'use strict';
    app.init($scope, function () {
        console.log('data objects ', $scope.data);
        
        $scope.boardAreaId ="";
        $scope.boardingPoint= [];
        $scope.reqtype= $scope.data.adhocDataList[0].RequestTypeDetails;
        $scope.reqFor= $scope.data.adhocDataList[0].RequestForDetails;
        $scope.timing= $scope.data.adhocDataList[0].ShiftTimeDetails;
        $scope.area= $scope.data.adhocDataList[0].AreaDetails
        
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
            // console.log("area selected-->"+ $scope.data.selectedarea);
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
        
        $scope.typeChange = function () {
            //console.log('---Request Type---' +  $scope.data.selectedreqtype);
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
        
        var errorMsg = function(){
            var alertPopup = $ionicPopup.alert({
                 title: 'Warning',
                 template: 'Please select all the required field.'
            });

             alertPopup.then(function(res) {
               // Custom functionality....
             });
        }
        
        var validate = function(){
            if(data.selectedreqtype && data.Date && data.selectedreqFor && data.selectedtiming
                && data.selectedarea && data.selectedboarding){
                    return;
                } else{
                    errorMsg();
                }
        }
        
        $scope.submitApprovals = function () {
            //perform field validation befor submit
            validate();
            
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
                // Shift: $('#ddlShiftTime').val(),
                // ShiftTimeName: $("#ddlShiftTime option:selected").text(),
                AreaID: $scope.boardAreaId,
                AreaName: $scope.data.selectedarea,
                // AreaName: $("#ddlArea option:selected").text(),
                //BoardingPointID: $('#ddlBoardingPoint').val(),
                BoardingPointName:$scope.data.selectedboarding,
                // BoardingPointName:$('#ddlBoardingPoint option:selected').text(),
                // SpecialNeed: $('input[name=optradio]:checked').val(),
                // SpecialNeedReason: splNeeed,
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
            //app.call('myapprovals.sendRequest', $scope.data);
        };
    });
}