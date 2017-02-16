var
  gulp = require('gulp');
  concat = require('gulp-concat');
  cssmin = require('gulp-cssmin');
  uglify = require('gulp-uglify');
  inject = require('gulp-inject');
  runSequence = require('run-sequence');
  del = require('del');

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
  var target = gulp.src('src/index.html');
  var sources = gulp.src(['build/styles/app.min.css', 'build/js/app.min.js'], {read: false})
  return target.pipe(inject(sources, {ignorePath: 'build', addRootSlash: false }))
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
  gulp.watch('src/styles/*.css', ['app-styles']);
  gulp.watch('src/js/*.js', ['app-scripts']);
  gulp.watch('src/index.html', ['index']);
});

gulp.task('default', function(){
  runSequence('build',
              'watch');
});

gulp.task('vendor-styles', function(){
  return gulp.src('node_modules/bootstrap/dist/css/*.css')
    .pipe(cssmin())
    .pipe(concat('vendors.min.css'))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('vendor-scripts', function(){
  return gulp.src(['node_modules/jquery/dist/*.js', 'node_modules/bootstrap/dist/js/*.js'])
    .pipe(uglify())
    .pipe(concat('vendors.min.js'))
    .pipe(gulp.dest('build/js'));
})