var config = require('../config');
var logger = require('powwow-server-common').logger;
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.getDashboard = function (page,params) {

    var xmlhttp = new XMLHttpRequest();
    //params are hard coded , need to make it dynamic.
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/DashBoardApi/GetDashboardDetails/?todaysdate=17-feb-2018&location=Chennai&employeeID=941364";
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/MyTripsApi/GetMyTripsDetails?todaydate=12-10-2017&employeeID=941364";
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/AdhocCabRequestApi/ReadAdhocCabRequestValues/?employeeID=930754&locationID=1";
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/CabApprovalApi/ReadPendingRequests/?status=1&loggedUser=880781";
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/CancelTransportRequestApi/SaveCancelRequests/?employeeID=941364&locationID=1&RequestTypeID=2 RequestForID=1&RequestTypeName=&RequestForName=&ShiftTimeID=&CabRequestID=&FromDateOpnNoShow=&ToDateOpnNoShow=";
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

             page.data(function(data) {
                 data.successmsg = response;
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