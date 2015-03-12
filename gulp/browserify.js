'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var browserify = require('browserify');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'vinyl-source-stream', 'vinyl-buffer']
});

gulp.task('browserify', function () {
  return browserify({
    entries: ['./' + paths.app + '/scripts/main.coffee'],
    extensions: ['.coffee', '.js'],
    debug: true
  })
    .transform('coffeeify')
    .bundle()
    .on('error', function (err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe($.vinylSourceStream('kusahaeru.js'))
    .pipe($.vinylBuffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.tmp));
});