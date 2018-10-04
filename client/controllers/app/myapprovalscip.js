angular.module('app').controller('app_myapprovalscip', app_myapprovalscip)
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
function app_myapprovalscip($scope, app) {
    'use strict';
   app.init($scope,function(data){
        // $scope.recordcount="Tap on card to select or de-select";
          var pendingitems=$scope.data.pendinglistitems;
         console.log(pendingitems + "---> Specialcab pending list details");
         if(pendingitems!=undefined) {
          if($scope.data.pendinglistitems==null || $scope.data.pendinglistitems=="" )
     {
        $scope.recordcount="No Request to approval";
     }
     else
     {
         $scope.recordcount="Tap on card to select or de-select";
     }
         }
  
     });
      
     
 $scope.selectbox = function(idvalue,elem) {
        
            if($(this).hasClass("selected"))
            {	
                $(this).removeClass("selected").css('background','#fff').find(".tickmark").css("display","none");
            }
            else
            {
                $(this).addClass("selected").css('background','#bddfed').find(".tickmark").css("display","block");
                
            }
    };  
    $scope.selectionall = function() {
        $(".card").each(function($index){
            if($(this).find(".approvallist").not("selected"))
            {	
                $(this).find(".approvallist").addClass("selected").css('background','#fff').find(".tickmark").css("display","block");
                $(this).find(".calendericon").css("display","none");
            }
        });
    };
    $scope.clearselection = function() {
        $(".card").each(function($index){
            if($(this).find(".approvallist").hasClass("selected"))
            {
                $(this).find(".approvallist").removeClass("selected").css('background','#fff').find(".tickmark").css("display","none");
                $(this).find(".calendericon").css("display","block");
            }
        });
    };
    $scope.submitApprovals=function(selectiontype){
         $scope.listarray = [];
    var sendtoconfirm = '';
        $(".card").each(function(){
            if($(this).find(".approvallist").hasClass("selected"))
            {
                var selectedvalue=$(this).find(".approvallist").find(".id").html();
                $scope.listarray.push(selectedvalue);
            }
        });
        //console.log($scope.listarray)
          //  console.log(JSON.stringify($scope.listarray))
            if($scope.listarray.length>0)
            {
        if(selectiontype=="approve"){
           // console.log($scope.listarray)
            
            sendtoconfirm={"cabRequestID":$scope.listarray,"status":"2"};
            console.log(sendtoconfirm)
           // app.call("goeasymethods.approvalconfirm",sendtoconfirm);
            //console.log($scope.sendtoconfirm+"approve" );
        }
        else{
            sendtoconfirm={"cabRequestID":$scope.listarray,"status":"3"};
            console.log(sendtoconfirm)
            // app.call("goeasymethods.approvalconfirm",sendtoconfirm);
            //console.log($scope.sendtoconfirm+"rejectlist");
        }
            }
            else
            {
                $scope.recordcount="No Request to approval";
            }
    };
}