var config = require('../config');
var logger = require('powwow-server-common').logger;
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.getDashboard = function (page,params) {

    var xmlhttp = new XMLHttpRequest();
    //params are hard coded , need to make it dynamic.
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/DashBoardApi/GetDashboardDetails/?todaysdate="+params.todaysdate+"&location="+params.locationname+"&employeeID="+params.employeeID;
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/MyTripsApi/GetMyTripsDetails?todaydate="+params.todaysdate+"&employeeID="+params.employeeID;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.mytrips = response;
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/AdhocCabRequestApi/ReadAdhocCabRequestValues/?employeeID="+params.employeeID+"&locationID="+params.locationID;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.adhocDataList = response;
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/CabApprovalApi/ReadPendingRequests/?status=1&loggedUser="+params.employeeID; //880781
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/CancelTransportRequestApi/SaveCancelRequests?RequestTypeName="+params.RequestTypeName+"&RequestForName="+params.RequestForName+"&ShiftTimeID="+params.ShiftTimeID+"&CabRequestID="+params.CabRequestID+"&FromDateOpnNoShow="+params.FromDateOpnNoShow+"&ToDateOpnNoShow="+params.ToDateOpnNoShow+"&RequestTypeID="+params.RequestTypeID+"&RequestForID="+params.RequestForID+"&locationID="+params.locationID+"&employeeID="+params.employeeID+"&RequestedForName="+params.RequestedForName;
   
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.successmsg = response;
             })
                 .screen("mytrips");
        }
        else{
            var response = JSON.parse(this.responseText);
             page.data(function(data) {
                data.successmsg = response.Message;
            })
                .screen("mytrips");
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/cabapprovalapi/ApprovePendingRequests?cabRequestID="+params.cabRequestID+"&remarks="+params.remarks+"&status="+params.status+"&approver="+params.approver;
    
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.successmsg = response;
             })
                 .screen("myapprovals");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}
exports.adhocRequest = function (page, params) {

    var xmlhttp = new XMLHttpRequest();
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/AdhocCabRequestApi/SaveCabOperationDetails/"+params;
    
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

            //  page.data(function(data) {
            //      data.successmsg = response;
            //  })
            //      .screen("");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}
