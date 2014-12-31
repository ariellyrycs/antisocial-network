/**
 * Created by arobles on 28/12/14.
 */
    'use strict';
var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    path = require('./paths.json'),
    concatCssFn = function() {
        return gulp.src(path.src.concat.concatCSS)
            .pipe(concatCss(path.dest.concat.concatCSSName))
            .pipe(gulp.dest(path.dest.concat.destRoot));
    };
gulp.task('concatCSS', ['stylus'], concatCssFn);
gulp.task('concatCSS:onlyWatch', ['stylus:onlyWatch'], concatCssFn);