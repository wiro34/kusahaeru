'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var util = require('util');
var browserSync = require('browser-sync');
var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if (baseDir === paths.app || (util.isArray(baseDir) && baseDir.indexOf(paths.app) !== -1)) {
    routes = {
      '/bower_components': 'bower_components',
      '/lib': 'lib'
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      middleware: middleware,
      routes: routes
    },
    open: false
  });
}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    paths.tmp,
    paths.app
  ], [
    paths.tmp + '/*.html',
    paths.tmp + '/styles/*.css',
    paths.tmp + '/scripts/*.js',
    paths.app + '/**/*.js',
    paths.app + '/**/*.html',
    paths.lib + '/*.js'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(paths.dist);
});
