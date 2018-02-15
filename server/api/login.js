var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var btoa = require('btoa');


exports.login = function (page,params) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://sacnte245.americas.ad.flextronics.com:9094/Authentication";
    var reqResponse = [];
    var enCredential ={'UserName':btoa(params.UserName),'PassWord':btoa(params.PassWord)}
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            // console.log("response-->"+response.IsSuccess);
            // console.log("IsDefaultCompany-->"+response.IsDefaultCompany);
            
            // page.data(function(data) {
            //     data.sitelist = reqResponse;
            // })
            //     .screen("sitepage");
        }
    };
    xmlhttp.open("POST", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(enCredential));

}
