/**
 * Created by arobles on 10/14/14.
 */
'use strict';
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    path = require('./paths.json'),

    startServer = function () {
        return nodemon({
            script: path.src.nodemonServer,
            watch: path.src.nodemonWatch
        })
            .on('change', ['lint:APIFiles'])
            .on('restart', livereload.changed);
};

gulp.task('demon', ['lint:APIFiles'], startServer);