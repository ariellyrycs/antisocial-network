/**
 * Created by arobles on 1/01/15.
 */
/*globals app*/
(function (app) {
    'use strict';
    app.controller('LoginController', ['$scope', '$http', '$window', 'FacebookLoginService',
        function ($scope, $http, $window, facebookLoginService) {


            $("main").onepage_scroll();


            $scope.alert = false;
            $scope.fb = facebookLoginService;
            $scope.fb.init($scope).then(function() {
                console.log('1');
               // $window.location.href= "#/connected";
            }, function () {
                console.log('12');
                //$window.location.href= "#/";
            });
            $scope.login = function () {
                $scope.fb.login().then(function () {
                   // $window.location.href= "#/connected";
                }, function () {
                    $scope.alert = true;
                });
            };

            /*
            $scope.verifyMe = function() {
                $scope.response.isValid = 'checking...';

                var url = '/verify/';
                url += encodeURIComponent(facebookLoginService.authResponse.userID);
                url += '/';
                url += encodeURIComponent(facebookLoginService.authResponse.accessToken);
                $http.get(url)
                    .success(function(response) {
                        console.log('response', response);
                        $scope.response = response;
                    });
            };*/
        }]);
}(app));