'use strict';
var gulp = require('gulp'),
    del = require('del'),
    path = require('./paths.json'),
    removeFiles = function(cb) {
        return del(this.path, cb);
};


gulp.task('remove', removeFiles.bind({path: path.src.remove.all}));
gulp.task('remove:js', removeFiles.bind({path: path.src.remove.js}));
gulp.task('remove:css', removeFiles.bind({path: path.src.remove.css}));