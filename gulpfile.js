var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');

gulp.task('app-styles', function(){
  return gulp.src('src/styles/*.css')
    .pipe(cssmin())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/styles'));
});