angular.module('app').controller('app_myapprovals',app_myapprovals)
.directive("approvallist",function($ionicGesture,$rootScope){
    return {
        scope: {},
        restrict: "A",
        link: function(scope, elem, attrs) {
           // elem.css('border-top','5px solid #ccc');  
            // onHold => start select box by `onHold` => working good
          $ionicGesture.on('hold', function() {
            elem.addClass("selected").css('border-top','5px solid #000');
            $rootScope.startSelect = true; // to enable select box by click
          }, elem);
          

					$ionicGesture.on('tap', function() {
          	if ($rootScope.startSelect) {
           		if (elem.hasClass('selected')) {
              	elem.removeClass('selected').css('border-top','5px solid #ddd');
              } else {
              	elem.addClass('selected').css('border-top','5px solid #000');
              }
            }
          }, elem);
        }
    };
});
function app_myapprovals($scope, app){
    'use strict';
    app.init($scope);
    $scope.selectbox = function(idvalue,elem) {
        
            if($(this).find(".approvallist").not("selected"))
            {	
                $(this).find(".approvallist").addClass("selected").css('border-top','5px solid #000');
            }
            else
            {
                $(this).find(".approvallist").removeClass("selected").css('border-top','5px solid #ddd');
            }
    };    
    $scope.selectionall = function() {
        $(".card").each(function($index){
            if($(this).find(".approvallist").not("selected"))
            {	
                $(this).find(".approvallist").addClass("selected").css('border-top','5px solid #000');
            }
        });
    };
    $scope.clearselection = function() {
        $(".card").each(function($index){
            if($(this).find(".approvallist").hasClass("selected"))
            {
                $(this).find(".approvallist").removeClass("selected").css('border-top','5px solid #ddd');
            }
        });
    };
    $scope.submitApprovals=function(selectiontype){
         $scope.listarray = [];
         $scope.sendtoconfirm= '';
        $(".card").each(function(){
            if($(this).find(".approvallist").hasClass("selected"))
            {
                var selectedvalue=$(this).find(".approvallist").find(".id").html();
                $scope.listarray.push(selectedvalue);
            }
        });
        if(selectiontype=="approve"){
            $scope.sendtoconfirm={"cabRequestID":$scope.listarray,"status":"1"}
            app.go("goeasymethods.approvalconfirm",sendtoconfirm);
            console.log($scope.sendtoconfirm+"approve" );
        }
        else{
            $scope.sendtoconfirm={"cabRequestID":$scope.listarray,"status":"2"}
             app.go("goeasymethods.approvalconfirm",sendtoconfirm);
            console.log($scope.sendtoconfirm+"rejectlist");
        }
        
    };
        
}

//ng-click="selectbox({{$index}})"