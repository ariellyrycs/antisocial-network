/**
 * Created by arobles on 28/12/14.
 */
var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require("gulp-rename");
    path = require('./paths.json');
    minCss =  function () {
        return gulp.src(path.src.cssMin)
                .pipe(cssmin())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest(path.dest.cssMin));

    };
gulp.task('cssMin', ['concatCSS'], minCss);