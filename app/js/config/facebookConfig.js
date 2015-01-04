/**
 * Created by arobles on 1/01/15.
 */
/*globals angular*/
(function(angular) {
    'use strict';

    var app = angular.module('fb.config', []);

    var FacebookLoginConfig = {
        API_VERSION: 'v2.1',
        APP_ID: '624101817712818',
        PERMISSIONS: 'public_profile, email, publish_actions',
        DEBUG: true
    };

    // DEBUG: true
    // - this turns on console.logs
    // Make sure you turn this off in production

    app.constant('FacebookLoginConfig', FacebookLoginConfig);

})(angular);