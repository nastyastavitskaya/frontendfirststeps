const del = require('del');
var
  gulp = require('gulp');
  concat = require('gulp-concat');
  cssmin = require('gulp-cssmin');
  uglify = require('gulp-uglify');
  inject = require('gulp-inject');
  runSequence = require('run-sequence');

gulp.task('app-styles', function(){
  return gulp.src('src/styles/*.css')
    .pipe(cssmin())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('app-scripts', function(){
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('index', function(){
  return gulp.src('src/index.html')
    .pipe(inject(gulp.src(['./build/styles/app.min.css', './build/js/app.min.js'],  {read: false})))
    .pipe(gulp.dest('build/'));
});

gulp.task('clean', function(){
  return del('build/').then(console.log('Cleaned folder'));
});

gulp.task('build', function(){
  runSequence('clean',
              ['app-styles', 'app-scripts'],
              'index');
});

gulp.task('watch', function(){
  gulp.watch(['src/styles/*.css'], function(event){
    gulp.run('app-styles');
  });
  gulp.watch(['src/js/*.js'], function(event){
    gulp.run('app-scripts');
  });
  gulp.watch(['src/index.html'], function(event){
    gulp.run('index');
  });
});

gulp.task('default', function(){
  runSequence('build',
              'watch');
});