angular.module('app').controller('app_adhocrequest', app_adhocrequest);
function app_adhocrequest($scope, app) {
    'use strict';
    app.init($scope, function () {
        console.log('data objects ', $scope.data);
        $scope.boardAreaId ="";
        $scope.reqtype= $scope.data.adhocDataList[0].RequestTypeDetails;
        $scope.reqFor= $scope.data.adhocDataList[0].RequestForDetails;
        $scope.timing= $scope.data.adhocDataList[0].ShiftTimeDetails;
        $scope.area= $scope.data.adhocDataList[0].AreaDetails;
        $scope.boardingPoint= $scope.data.adhocDataList[0].RelBoardingPointDetails;
        $scope.areaSelect = function () {
            console.log("area selected-->"+ $scope.data.selectedarea);
            var i=0;
            for(i;i<$scope.data.adhocDataList[0].AreaDetails.length;i++){
                
            if ($scope.data.adhocDataList[0].AreaDetails[i].AreaName == $scope.data.selectedarea){
                
                console.log("selec area id-->"+$scope.data.adhocDataList[0].AreaDetails[i].RelAreaID);
                $scope.boardAreaId = $scope.data.adhocDataList[0].AreaDetails[i].RelAreaID;
                break;
            }
         }
        }
        $scope.filterExpression = function() {
                return ($scope.boardingPoint.Area === $scope.boardAreaId );
            };
        $scope.typeChange = function () {
            // console.log('---Request Type---' + JSON.stringify($scope.data.RequestType.selected.label));
            // var selectedReqTyp = $scope.data.RequestType.selected.value;
            // $scope.submitApprovals();
            // switch (selectedReqTyp) {
            // case '2':
            //     $scope.dateField = true;
            //     $scope.fromDateField = false;
            //     $scope.toDateField = false;
            //     break;
            // case '3':
            //     $scope.dateField = true;
            //     $scope.fromDateField = false;
            //     $scope.toDateField = false;
            //     break;
            // case '4':
            //     $scope.dateField = false;
            //     $scope.fromDateField = true;
            //     $scope.toDateField = true;
            //     break;
            // default:
            //     console.log('in default--' + selectedReqTyp);
            //     $scope.dateField = false;
            //     $scope.fromDateField = false;
            //     $scope.toDateField = false;
            //     break;
            // }
        };
        $scope.submitApprovals = function () {
            app.call('myapprovals.sendRequest', $scope.data);
        };
    });
}