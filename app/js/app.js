/**
 * Created by arobles on 28/12/14.
 */
/* globals angular, $ */
(function () {
    'use strict';

    var app = angular.module('AntisocialNetwork', ['ngRoute']);
    app.constant('settings', {
        baseUrl: 'http://localhost:3000/'
    });
})();

$('body').css('background', 'green');