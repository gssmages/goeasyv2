var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var btoa = require('btoa');
var goEasyMethods = require('./goeasymethods.js');
var urlConfig = require('./urlConfig.js');

exports.login = function (page,params) {
    var xmlhttp = new XMLHttpRequest();
   
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/login/CheckLoginDetailEncryption?userName="+btoa(params.UserName)+"&password ="+btoa(params.PassWord
   /* page.screen("home");*/
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/login/CheckLoginDetailEncryption?userName="+params.username+"&password="+params.password;
    var pass=encodeURIComponent(params.password);
    var url = urlConfig.urlData.LoginReq+"username="+params.username+"&password="+pass;
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            
            //goEasyMethods.getDashboard(page,response);
             page.data(function(data) {
                data.home = response;
             })
            .screen("homesuccess");
/*if(response.LocationID==1)
{
    page.screen("homesuccess");
}
            else{
               page.screen("login");
            }*/
        }else{
            var response = JSON.parse(this.responseText);
             page.data(function(data) {
                data.errorMessage = response.Message;
            })
                .screen("login");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //xmlhttp.send(JSON.stringify(enCredential));
    xmlhttp.send();
}
