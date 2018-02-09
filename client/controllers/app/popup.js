angular.module('app').controller('app_popup', app_popup);
function app_popup($scope, app, $ionicPopup) {
    'use strict';
    app.init($scope);
    $scope.alert = function () {
        $ionicPopup.show({
            title: 'Alert/Confirm',
            subTitle: 'This is an alert box, click OK button',
            scope: $scope,
            buttons: [{
                    text: '<b>Ok</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (window.mocks) {
                            $scope.app.data.alertConfirmationMessage = 'This is a warning message!';
                        } else {
                            app.call('popup.alert');
                        }
                    }
                }]
        });
    };
    $scope.confirm = function () {
        $ionicPopup.show({
            title: 'Alert/Confirm',
            subTitle: 'Press a button!',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel',
                    onTap: function (e) {
                        if (window.mocks) {
                            $scope.app.data.confirmPopupText = 'You pressed Cancel!';
                        } else {
                            app.call('popup.confirm', { 'action': 'CANCEL' });
                        }
                    }
                },
                {
                    text: '<b>Ok</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (window.mocks) {
                            $scope.app.data.confirmPopupText = 'You pressed OK!';
                        } else {
                            app.call('popup.confirm', { 'action': 'OK' });
                        }
                    }
                }
            ]
        });
    };
}