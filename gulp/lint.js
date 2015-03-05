'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();

gulp.task('jshint', function () {
  return gulp.src(paths.src + '/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('coffeelint', function () {
  return gulp.src(paths.src + '/**/*.coffee')
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter());
});
