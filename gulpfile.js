var gulp = require('gulp');
var min = require('gulp-htmlmin');
var rename = require('gulp-rename');

gulp.task('default', [], function () {
  gulp.src('./index.html')
  .pipe(min({
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true
  }))
  .pipe(rename('index.min.html'))
  .pipe(gulp.dest('./public'));
});