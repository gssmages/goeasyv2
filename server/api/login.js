var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var btoa = require('btoa');
var goEasyMethods = require('./goeasymethods.js');

exports.login = function (page,params) {
    var xmlhttp = new XMLHttpRequest();
   
    //var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/login/CheckLoginDetailEncryption?userName="+btoa(params.UserName)+"&password ="+btoa(params.PassWord
   /* page.screen("home");*/
    var url = "http://gssnte811.asia.ad.flextronics.com:4042/api/login/CheckLoginDetailEncryption?userName="+params.username+"&password="+params.password;
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            
            //goEasyMethods.getDashboard(page,response);
             page.data(function(data) {
                data.home = response;
             })
             .screen("homesuccess");
        }else{
            var response = JSON.parse(this.responseText);
             page.data(function(data) {
                data.error = response.Message;
            })
                .screen("login");
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //xmlhttp.send(JSON.stringify(enCredential));
    xmlhttp.send();
}
