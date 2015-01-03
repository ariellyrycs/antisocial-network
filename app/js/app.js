/**
 * Created by arobles on 28/12/14.
 */
/* globals angular */
/*exported app */
var app = (function () {
    'use strict';
    var app = angular.module('AntisocialNetwork', ['FacebookLoginApp', 'ngRoute']);
    app.constant('settings', {
        baseUrl: 'http://localhost:3000/'
    });
    return app;
})();
