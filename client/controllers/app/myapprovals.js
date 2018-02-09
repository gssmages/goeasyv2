angular.module('app').controller('app_myapprovals',app_myapprovals).directive("approvallist",function($ionicGesture,$rootScope){
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
    $scope.$on('$ionicView.enter', function(){
        var index1 = 0;
        angular.forEach($scope.data.listItems, function (value) {
            if($scope.data.listItems[index1].isselect=== true)
            {
                $scope.data.listItems[index1].isselect=false;
            }
            index1=index1+1;
        });
    });
    $scope.selectbox = function(idvalue,elem) {
        var index = 0;
        angular.forEach($scope.data.listItems, function (value) {
            if(index===idvalue)
            {
                if($scope.data.listItems[index].isselect=== true)
                {
                    $scope.data.listItems[index].isselect=false;
                }
                else
                {
                    $scope.data.listItems[index].isselect=true;
                }
            }
            else
            {
                if($scope.data.listItems[index].isselect=== true)
                {
                    $scope.data.listItems[index].isselect=true;
                }
                else
                {
                    $scope.data.listItems[index].isselect=false;
                }
            }
            index=index+1;
        }); 
    };    
    $scope.selectionall = function() {
        $(".card").each(function($index){
            if($(this).find(".approvallist").not("selected"))
            {	
                $(this).find(".approvallist").addClass("selected").css('border-top','5px solid #000');
                $scope.data.listItems[$index].isselect=true;
            }
        });
    };
    $scope.clearselection = function() {
        $(".card").each(function($index){
            if($(this).find(".approvallist").hasClass("selected"))
            {
                $(this).find(".approvallist").removeClass("selected").css('border-top','5px solid #ddd');
                $scope.data.listItems[$index].isselect=false;
            }
        });
    };
    $scope.submitApprovals=function(selectiontype){
        if(selectiontype=="approve"){app.call('myapprovals.approve',$scope.data);}
        else{app.call('myapprovals.reject',$scope.data);}};
}