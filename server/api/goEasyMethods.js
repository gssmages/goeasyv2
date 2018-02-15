var config = require('../config');
var logger = require('powwow-server-common').logger;
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.getDashboard = function (page,params) {

    var xmlhttp = new XMLHttpRequest();
    
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/DashBoardApi/GetDashboardDetails/"+params;
    var reqResponse = [];
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);

            // page.data(function(data) {
            //     data.dashboard_list = response;
            // })
            //     .screen("dashboard");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}