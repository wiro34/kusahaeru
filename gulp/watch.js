'use strict';

var gulp = require('gulp');
var paths = gulp.paths;

gulp.task('watch', ['inject'], function () {
  gulp.watch([
    paths.app + '/*.html',
    paths.app + '/**/*.scss',
    paths.app + '/**/*.js',
    paths.app + '/**/*.coffee',
    'bower.json'
  ], ['inject']);
});
