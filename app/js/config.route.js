/**
 * Created by arobles on 28/12/14.
 */
/*globals angular*/
(function () {
    'use strict';

    angular.module('AntisocialNetwork')
        .config(['$routeProvider', '$sceDelegateProvider', 'settings', routingConfig]);

    function routingConfig($routeProvider, $sceDelegateProvider, settings) {

        var baseUrl = settings.baseUrl,
            templates = {
            main: baseUrl + 'index'
        };

        $sceDelegateProvider.resourceUrlWhitelist(['self', baseUrl + '**']);

        $routeProvider
            .when('/', {
                templateUrl: templates.main,
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();