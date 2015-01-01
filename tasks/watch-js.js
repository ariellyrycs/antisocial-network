/**
 * Created by arobles on 10/8/14.
 */
'use strict';
var gulp = require('gulp'),
    path = require('./paths.json'),
    asyncTaskControl = {
        'js': {
            'src': path.src.concat.concatBuild,
            'events': ['remove:js', 'concat:onlyWatch', 'lint:onlyWatch']
        },
        'css': {
            'src': path.src.stylus,
            'events': ['remove:css', 'stylus:onlyWatch']
        }
    },
    asyncBuildTasks = function () {
        var run = function () {
                console.log('reloaded');
            },
            watch = function () {
                gulp.start(this.asyncTaskControl, run);
            };
        gulp.watch(asyncTaskControl.js.src, watch.bind({asyncTaskControl: asyncTaskControl.js.events}));
        gulp.watch(asyncTaskControl.css.src, watch.bind({asyncTaskControl: asyncTaskControl.css.events}));
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
