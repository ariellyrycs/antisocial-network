/**
 * Created by arobles on 10/8/14.
 */
'use strict';
var gulp = require('gulp'),
    path = require('./paths.json'),
    asyncTaskControl = [{
        "src": path.src.concat,
        "events": ['ugly:onlyWatch', 'lint:onlyWatch', 'reloadConnection:js']
    },
    {
        "src": path.src.stylus,
        "events": ['stylus:onlyWatch', 'reloadConnection:css']
    }],
    asyncBuildTasks = function () {
        var run = function () {
                console.log('reloaded');
            },
            watch = function () {
                gulp.start(this.asyncTaskControl, run);
            };
        gulp.watch(asyncTaskControl[0].src, watch.bind({asyncTaskControl: asyncTaskControl[0].events}));
        gulp.watch(asyncTaskControl[1].src, watch.bind({asyncTaskControl: asyncTaskControl[1].events}));
    },
    asyncGulpTasks = function () {
        var run = function () {
            console.log('Gulp Files');
            },
            watch = function () {
                gulp.start('lint:gulpFiles', run);
            };
        gulp.watch(path.src.jshintGulp, watch);
    };
gulp.task('watch', ['lint'], asyncBuildTasks);
gulp.task('watch:gulpFiles', ['lint:gulpFiles'], asyncGulpTasks);
