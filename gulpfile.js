var
  gulp = require('gulp');
  concat = require('gulp-concat');
  cssmin = require('gulp-cssmin');
  uglify = require('gulp-uglify');
  inject = require('gulp-inject');
  runSequence = require('run-sequence');
  del = require('del');
  sass = require('gulp-sass');
  babelify = require('babelify');
  browserify = require('browserify');
  buffer = require('vinyl-buffer');
  source = require('vinyl-source-stream');
  sourcemaps = require('gulp-sourcemaps');
  connect = require('gulp-connect');

gulp.task('app-styles', function(){
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/styles'))
    .pipe(connect.reload());
});

gulp.task('app-scripts', function(){
  bundler = browserify({
    entries: ['src/js/app.js'],
    debug: true
  }).transform(babelify)

  return bundler.bundle()
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

gulp.task('vendor-styles', function(){
  return gulp.src('node_modules/bootstrap/dist/css/*.css')
    .pipe(cssmin())
    .pipe(concat('vendors.min.css'))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('vendor-scripts', function(){
  return gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js'])
    .pipe(uglify())
    .pipe(concat('vendors.min.js'))
    .pipe(gulp.dest('build/js'));
})

gulp.task('index', function(){
  gulp.src('src/index.html')
    .pipe(inject(gulp.src(['build/styles/*.css', 'build/js/app.min.js'], {read: false}), {ignorePath: 'build', addRootSlash: false }))
    .pipe(inject(gulp.src('build/js/vendors.min.js', {read: false}), {starttag: '<!-- inject:head:{{ext}} -->', ignorePath: 'build', addRootSlash: false }))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('clean', function(){
  return del('build/').then(console.log('Cleaned folder'));
});

gulp.task('build', function(){
  runSequence('clean',
              ['app-styles', 'app-scripts', 'vendor-styles', 'vendor-scripts'],
              'index');
});

gulp.task('watch', function(){
  gulp.watch('src/styles/*.scss', ['app-styles']);
  gulp.watch('src/js/*.js', ['app-scripts']);
  gulp.watch('src/index.html', ['index']);
});

gulp.task('connect', function(){
  connect.server({
    root: './build',
    port: 5005,
    livereload: true
  });
});

gulp.task('default', function(){
  runSequence('build',
              ['connect', 'watch']);
});
