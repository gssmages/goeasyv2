var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var btoa = require('btoa');


exports.login = function (page,params) {
    var xmlhttp = new XMLHttpRequest();
    // var url = "http://sacnte245.americas.ad.flextronics.com:9094/Authentication";
    // var reqResponse = [];
    // var enCredential ={'UserName':btoa(params.UserName),'PassWord':btoa(params.PassWord)}
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/DashBoardApi/GetDashboardDetails/?todaysdate=12-01-2017&location=1&employeeID=941364"
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            // console.log("response-->"+response.IsSuccess);
            // console.log("IsDefaultCompany-->"+response.IsDefaultCompany);
            
            page.data(function(data) {
                data.home = reqResponse;
            })
                .screen("home");
        }
    };
    // xmlhttp.open("POST", url, false);
    // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // xmlhttp.send(JSON.stringify(enCredential));
    xmlhttp.open("GET", url, false);
     xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
     xmlhttp.send();

}
