/**
 * Created by arobles on 10/10/14.
 */
'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    path = require('./paths.json'),
    merge = require('merge-stream'),
    uglifyJsFiles = function() {
        console.log('ugly');
        var vendor = gulp.src(path.src.uglify.vendor)
            .pipe(uglify(path.dest.uglify.vendorName))
            .pipe(gulp.dest(path.dest.uglify.destRoot)),
            all = gulp.src(path.src.uglify.all)
                .pipe(uglify(path.dest.uglify.allName))
                .pipe(gulp.dest(path.dest.uglify.destRoot));
        return merge(vendor, all);
};
gulp.task('ugly', ['concat'], uglifyJsFiles);
gulp.task('ugly:onlyWatch', ['concat:onlyWatch'], uglifyJsFiles);
