var gulp = require('gulp');
var min = require('gulp-htmlmin');
var min2 = require('gulp-minify-inline');
var rename = require('gulp-rename');

gulp.task('default', [], function () {
  gulp.src('./index.html')
  .pipe(min({
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true
  }))
  // .pipe(min2())
  .pipe(rename('index.min.html'))
  .pipe(gulp.dest('./public'));
});