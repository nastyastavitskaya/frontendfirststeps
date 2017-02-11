var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
const del = require('del');
var runSequence = require('run-sequence');

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
    .pipe(inject(gulp.src(['build/styles/app.min.css', 'build/js/app.min.js'],  {read: false})))
    .pipe(gulp.dest('build/'));
});

gulp.task('clean', function(){
  del('build/').then(console.log('Cleaned folder'));
});

gulp.task('build', function(){
  runSequence('clean',
              ['app-styles', 'app-scripts'],
              'index');
});

gulp.task('watch', function(){
  gulp.watch(['src/styles/*.css', 'src/js/*.js', 'src/index.html'], function(event){
    gulp.run('build');
  });
});

