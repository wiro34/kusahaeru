'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

gulp.task('inject', ['jshint', 'coffeelint', 'browserify', 'styles'], function () {
  var injectStyles = gulp.src([
    paths.tmp + '/styles/**/*.css'
  ], { read: false });

  var injectScripts = gulp.src([
    paths.tmp + '/*.js',
    '!' + paths.src + '/**/*.spec.js',
    '!' + paths.src + '/**/*.mock.js'
  ]);

  var injectOptions = {
    ignorePath: [paths.src, paths.src +'/scripts', paths.tmp],
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'bower_components',
    exclude: [/bootstrap\.css/, /bootstrap\.css/, /foundation\.css/]
  };

  return gulp.src(paths.src + '/*.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp));
});
