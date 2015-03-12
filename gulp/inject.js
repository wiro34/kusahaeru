'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();
var _ = require('lodash');
var wiredep = require('wiredep').stream;

gulp.task('inject', ['jshint', 'coffeelint', 'browserify', 'styles'], function () {
  var injectStyles = gulp.src([
      paths.tmp + '/styles/**/*.css'
  ], { read: false });

  var injectScripts = gulp.src([
      paths.tmp + '/*.js',
      '!' + paths.app + '/scripts/**/*.spec.js',
      '!' + paths.app + '/scripts/**/*.mock.js'
  ]);

  var assetsScripts = gulp.src([
      paths.app + '/assets/**/*.js'
  ]);

  var injectOptions = {
    ignorePath: [paths.app, paths.app + '/scripts', paths.tmp],
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'bower_components',
    exclude: [/bootstrap\.css/, /bootstrap\.css/, /foundation\.css/]
  };

  return gulp.src(paths.app + '/*.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe($.inject(assetsScripts, _.merge({name: 'assets'}, injectOptions)))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp));
});
