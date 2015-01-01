'use strict';

var gulp = require('gulp'),
    livereload =  require('gulp-livereload'),
    path = require('./paths.json'),
    listen = function () {
        livereload.listen(35729);
    };
gulp.watch(path.src.livereload.public).on('change', livereload.changed);
gulp.task('livereload:Listen', listen);


