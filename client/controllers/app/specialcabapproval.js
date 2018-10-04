angular.module('app').controller('app_specialcabapproval', app_specialcabapproval)
.directive("approvallist",function($ionicGesture,$rootScope){
    return {
        scope: {},
        restrict: "A",
        link: function(scope, elem, attrs) {
           // elem.css('border-top','5px solid #ccc');  
            // onHold => start select box by `onHold` => working good
          $ionicGesture.on('hold', function() {
            elem.addClass("selected").css("background","#fff");
            elem[0].querySelector('.tickmark').style.display="block";
            elem[0].querySelector('.calendericon').style.display="none";
            $rootScope.startSelect = true; // to enable select box by click
          }, elem);
		$ionicGesture.on('tap',function(){
        if ($rootScope.startSelect) {
           if (elem.hasClass('selected')) {
               elem.removeClass('selected').css("background","#fff");
                elem[0].querySelector('.tickmark').style.display="none";
                elem[0].querySelector('.calendericon').style.display="block";
              } else {
               elem.addClass('selected').css("background","#fff");
                elem[0].querySelector('.tickmark').style.display="block";
                elem[0].querySelector('.calendericon').style.display="none";
              }
            }
          }, elem);
        }
    };
});
function app_specialcabapproval($scope, app) {
    'use strict';
    app.init($scope);
}