angular.module('app').controller('app_myapprovals',app_myapprovals)
.directive("approvallist",function($ionicGesture,$rootScope){
    return {
        scope: {},
        restrict: "A",
        link: function(scope, elem, attrs) {
           // elem.css('border-top','5px solid #ccc');  
            // onHold => start select box by `onHold` => working good
          $ionicGesture.on('hold', function() {
            elem.addClass("selected").css({'background':'#1c9ad6','color':'#fff;'});
            $rootScope.startSelect = true; // to enable select box by click
          }, elem);
		$ionicGesture.on('tap',function(){
        if ($rootScope.startSelect) {
           if (elem.hasClass('selected')) {
               elem.removeClass('selected').css({'background':'#fff','color':'#000;'});
              } else {
               elem.addClass('selected').css({'background':'#1c9ad6','color':'#fff;'});
              }
            }
          }, elem);
        }
    };
});
function app_myapprovals($scope, app, $ionicPopup){
    'use strict';
     app.init($scope,function(data){
         $scope.recordcount="Tap on card to select or de-select";
   /*      var success=$scope.data.successmsg;
     console.log(success+"thisissuccesmsg");
      if(success!=undefined)
         {
          var alertPopup = $ionicPopup.alert({
     title: 'Goeasy message',
     template: success
   });

   alertPopup.then(function(res) {
      $scope.data.successmsg=undefined;
     console.log('Reload same approval page');
     var params={"employeeID":$localStorage.employeeID};
     app.call('goeasymethods.getMyApprovals',params);
   });
         }*/
     });
    
    $scope.selectbox = function(idvalue,elem) {
        
            if($(this).find(".approvallist").not("selected"))
            {	
                $(this).find(".approvallist").addClass("selected").css('background','#1c9ad6');
            }
            else
            {
                $(this).find(".approvallist").removeClass("selected").css('background','#fff');
            }
    };    
    $scope.selectionall = function() {
        $(".card").each(function($index){
            if($(this).find(".approvallist").not("selected"))
            {	
                $(this).find(".approvallist").addClass("selected").css('background','#1c9ad6');
            }
        });
    };
    $scope.clearselection = function() {
        $(".card").each(function($index){
            if($(this).find(".approvallist").hasClass("selected"))
            {
                $(this).find(".approvallist").removeClass("selected").css('background','#fff');
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
            //console.log(JSON.stringify($scope.listarray))
            sendtoconfirm={"cabRequestID":$scope.listarray,"status":"2"};
            app.call("goeasymethods.approvalconfirm",sendtoconfirm);
            //console.log($scope.sendtoconfirm+"approve" );
        }
        else{
            sendtoconfirm={"cabRequestID":$scope.listarray,"status":"3"};
             app.call("goeasymethods.approvalconfirm",sendtoconfirm);
            //console.log($scope.sendtoconfirm+"rejectlist");
        }
            }
            else
            {
                $scope.recordcount="No Request to approval";
            }
    };
}

//ng-click="selectbox({{$index}})"