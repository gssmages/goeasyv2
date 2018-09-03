var config = require('../config');
var logger = require('powwow-server-common').logger;
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var urlConfig = require('./urlConfig.js');

exports.getDashboard = function (page,params) {

    var xmlhttp = new XMLHttpRequest();
    //params are hard coded , need to make it dynamic.
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/DashBoardApi/GetDashboardDetails/?todaysdate="+params.todaysdate+"&location="+params.locationname+"&employeeID="+params.employeeID;
    var url = urlConfig.urlData.Dashboard+"todaysdate="+params.todaysdate+"&location="+params.locationname+"&employeeID="+params.employeeID;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

            page.data(function(data) {
                data.home = response;
            })
                .screen("home");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}
exports.getMytrips = function (page,params) {

    var xmlhttp = new XMLHttpRequest();
    
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/MyTripsApi/GetMyTripsDetails?todaydate="+params.todaysdate+"&employeeID="+params.employeeID;
    var url = urlConfig.urlData.MyTrips+"todaydate="+params.todaysdate+"&employeeID="+params.employeeID;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.mytrips = response;
             })
                 .screen("mytrips");
        }
        else{
             page.data(function(data) {
                 data.errormsg = "No Trip details";
             })
                 .screen("mytrips");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}

exports.getAdhocdetails = function (page, params) {

    var xmlhttp = new XMLHttpRequest();
    
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/AdhocCabRequestApi/ReadAdhocCabRequestValues/?employeeID="+params.employeeID+"&locationID="+params.locationID;
    var url = urlConfig.urlData.GetAdhoc+"employeeID="+params.employeeID+"&locationID="+params.locationID;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.adhocDataList = response;
             })
                 .screen("adhocrequest");
        }
         else{
            var response = JSON.parse(this.responseText);
             page.data(function(data) {
                data.errormsg = response.Message;
            })
                .screen("adhocrequest");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}
exports.getMyApprovals = function (page, params) {

    var xmlhttp = new XMLHttpRequest();
    
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/CabApprovalApi/ReadPendingRequests/?status=1&loggedUser="+params.employeeID; //880781
    var url = urlConfig.urlData.MyAproval+"status=1&loggedUser="+params.employeeID;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.pendinglistitems = response;
             })
                 .screen("myapprovals");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}
exports.sendNoshow = function (page, params) {

    var xmlhttp = new XMLHttpRequest();
    
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/CancelTransportRequestApi/SaveCancelRequests?RequestTypeName="+params.RequestTypeName+"&RequestForName="+params.RequestForName+"&ShiftTimeID="+params.ShiftTimeID+"&CabRequestID="+params.CabRequestID+"&FromDateOpnNoShow="+params.FromDateOpnNoShow+"&ToDateOpnNoShow="+params.ToDateOpnNoShow+"&RequestTypeID="+params.RequestTypeID+"&RequestForID="+params.RequestForID+"&locationID="+params.locationID+"&employeeID="+params.employeeID+"&RequestedForName="+params.RequestedForName;
    var url = urlConfig.urlData.NoShow+"RequestTypeName="+params.RequestTypeName+"&RequestForName="+params.RequestForName+"&ShiftTimeID="+params.ShiftTimeID+"&CabRequestID="+params.CabRequestID+"&FromDateOpnNoShow="+params.FromDateOpnNoShow+"&ToDateOpnNoShow="+params.ToDateOpnNoShow+"&RequestTypeID="+params.RequestTypeID+"&RequestForID="+params.RequestForID+"&locationID="+params.locationID+"&employeeID="+params.employeeID+"&RequestedForName="+params.RequestedForName+"&ShiftTimeName="+params.ShiftTimeName+"&UserTime="+params.UserTime;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.successmsg = response;
             })
                 .screen("mytripsmsg");
        }
        else{
            var response = JSON.parse(this.responseText);
             page.data(function(data) {
                data.successmsg = response.Message;
            })
                .screen("mytripsmsg");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}
exports.approvalconfirm = function (page, params) { 
                page.data(function(data) {
                 data.approvalinfo = params;
             })
                 .screen("alertwin");    
}

exports.gettripinfo = function (page, params) { 
                page.data(function(data) {
                 data.tripinfo = params;
             })
                 .screen("tripcancellation");    
}
exports.approvalrequest = function (page, params) {

    var xmlhttp = new XMLHttpRequest();
    
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/cabapprovalapi/ApprovePendingRequests?cabRequestID="+params.cabRequestID+"&remarks="+params.remarks+"&status="+params.status+"&approver="+params.approver;
    var url = urlConfig.urlData.ApprovalReq+"cabRequestID="+params.cabRequestID+"&remarks="+params.remarks+"&status="+params.status+"&approver="+params.approver;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.successmsg = response;
             })
                 .screen("approvalmsg");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}
exports.adhocRequest = function (page, params) {

    var xmlhttp = new XMLHttpRequest();
    
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/AdhocCabRequestApi/SaveCabOperationDetails?LocationID="+params.LocationID+"&EmployeeID="+params.EmployeeID+"&RequestTypeID="+params.RequestTypeID+"&RequestTypeName="+params.RequestTypeName+"&RequestForID="+params.RequestForID+"&RequestForName="+params.RequestForName+"&FromDate="+params.FromDate+"&Todate="+params.Todate+"&CommonDate="+params.CommonDate+"&UserTime="+params.UserTime+"&Shift="+params.Shift+"&ShiftTimeName="+params.ShiftTimeName+"&AreaID="+params.AreaID+"&AreaName="+params.AreaName+"&BoardingPointID="+params.BoardingPointID+"&BoardingPointName="+params.BoardingPointName+"&SpecialNeed="+params.SpecialNeed+"&SpecialNeedReason="+params.SpecialNeedReason+"&Reason="+params.Reason+"&StatusID="+params.StatusID+"&IsActive="+params.IsActive+"&EmployeeName="+params.EmployeeName+"&CreatedBy="+params.CreatedBy;
    var url = urlConfig.urlData.AdhocReq+"LocationID="+params.LocationID+"&EmployeeID="+params.EmployeeID+"&RequestTypeID="+params.RequestTypeID+"&RequestTypeName="+params.RequestTypeName+"&RequestForID="+params.RequestForID+"&RequestForName="+params.RequestForName+"&FromDate="+params.FromDate+"&Todate="+params.Todate+"&CommonDate="+params.CommonDate+"&UserTime="+params.UserTime+"&Shift="+params.Shift+"&ShiftTimeName="+params.ShiftTimeName+"&AreaID="+params.AreaID+"&AreaName="+params.AreaName+"&BoardingPointID="+params.BoardingPointID+"&BoardingPointName="+params.BoardingPointName+"&SpecialNeed="+params.SpecialNeed+"&SpecialNeedReason="+params.SpecialNeedReason+"&Reason="+params.Reason+"&StatusID="+params.StatusID+"&IsActive="+params.IsActive+"&EmployeeName="+params.EmployeeName+"&CreatedBy="+params.CreatedBy;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

              page.data(function(data) {
                  data.successmsg = response;
              })
                  .screen("adhocmsg");
        }
        else{
            var response = JSON.parse(this.responseText);
            var responseMessage;
            if(response.Message){
                responseMessage = response.Message;
            }else{
                responseMessage = response;
            }
             page.data(function(data) {
                data.successmsg = responseMessage;
            })
                .screen("adhocmsg");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}
exports.showFeedback = function (page, params) { 
                var xmlhttp = new XMLHttpRequest();
    var url = urlConfig.urlData.GetFeedback+"employeeLocID="+params.employeeLocID;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.feedbackdetails = response;
             })
                 .screen("feedback");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
               //page.screen("feedback");    
}
exports.saveFeedback = function (page, params) { 
                var xmlhttp = new XMLHttpRequest();   
    
    var url = urlConfig.urlData.SaveFeedback+"employeeID="+params.employeeID+"&questionID="+params.questionID+"&comments="+params.comment+"&date="+params.date+"&reqFor="+params.reqFor;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

           page.data(function(data) {
                 data.successmsg = response;
             })
                 .screen("feedbackmsg");
        }
         else{
            var response = JSON.parse(this.responseText);
             page.data(function(data) {
                data.successmsg = response.Message;
            })
                .screen("feedbackmsg");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
               //page.screen("feedback");    
}