'use strict';

var gulp = require('gulp');

gulp.paths = {
  app: 'app',
  dist: 'dist',
  assets: 'assets',
  tmp: '.tmp',
  e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
