var config = require('../config');
var logger = require('powwow-server-common').logger;
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.getDashboard = function (page,params) {

    var xmlhttp = new XMLHttpRequest();
    //params are hard coded , need to make it dynamic.
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/DashBoardApi/GetDashboardDetails/?todaysdate=16-feb-2018&location=Chennai&employeeID=972088";
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
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/MyTripsApi/GetMyTripsDetails/?employeeID=941364&todaydate=12-01-2017";
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
