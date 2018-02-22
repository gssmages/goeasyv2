angular.module('app').controller('app_myapprovals',app_myapprovals)
.directive("approvallist",function($ionicGesture,$rootScope){
    return {
        scope: {},
        restrict: "A",
        link: function(scope, elem, attrs) {
            elem.css('border-top','5px solid #ccc');   
        }
    }
});
function app_myapprovals($scope, app){
    'use strict';
    app.init($scope);
    $scope.selectbox = function(idvalue,elem) {
        $(".card").each(function($index){
            if($(this).find(".approvallist").not("selected"))
            {	
                $(this).find(".approvallist").addClass("selected").css('border-top','5px solid #000');
            }
        });
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
        if(selectiontype=="approve"){app.call('myapprovals.approve',$scope.data);}
        else{app.call('myapprovals.reject',$scope.data);}};
}