'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
  var sassOptions = {
    style: 'expanded',
    includePaths: 'src'
  };

  return gulp.src([
    paths.src + '/styles/**/*.scss',
    'bower_components/**/*.scss'
  ])
    .pipe($.sass(sassOptions))
    .pipe($.autoprefixer())
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(paths.tmp + '/styles'));
});
