/**
 * Created by arobles on 10/8/14.
 */

'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    path = require('./paths.json'),
    merge = require('merge-stream'),
    concatJs = function() {
        console.log('concat');
        var concatBuild = gulp.src(path.src.concat.concatBuild)
            .pipe(concat(path.dest.concat.concatBuildName))
            .pipe(gulp.dest(path.dest.concat.destRoot)),
            concatVendor = gulp.src(path.src.concat.concatVendor)
            .pipe(concat(path.dest.concat.concatVendorName))
            .pipe(gulp.dest(path.dest.concat.destRoot));

        return merge(concatBuild, concatVendor);
};
gulp.task('concat', ['remove'], concatJs);
gulp.task('concat:onlyWatch', ['remove:js'], concatJs);
