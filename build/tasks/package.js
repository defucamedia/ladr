var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var minifyCss = require('gulp-minify-css');
var paths = require('../paths');

var sitePaths = [paths.output + 'app-build.js', paths.output + 'aurelia.js'];
var dependenciesPaths = paths.jspm + '**/*.*';
var rootFiles = ['.htaccess', 'config.js', 'favicon.ico', 'formmail.php', 'fmconfig.ini', 'index.html', 'index.js'];

// copies changed dist files to the output directory
gulp.task('package-dist', function () {
  return gulp.src(sitePaths)
    .pipe(changed(paths.artifacts + 'dist/'))
    .pipe(gulp.dest(paths.artifacts + 'dist/'));
});

// copies changed jspm files to the output directory
gulp.task('package-dependencies', function () {
  return gulp.src(dependenciesPaths)
    .pipe(changed(paths.artifacts + 'jspm_packages/'))
    .pipe(gulp.dest(paths.artifacts + 'jspm_packages/'));
});

gulp.task('package-site', function() {
  return gulp.src(rootFiles)
    .pipe(changed(paths.artifacts))
    .pipe(gulp.dest(paths.artifacts));
});

gulp.task('package-css', function() {
  return gulp.src(paths.style)
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.artifacts + 'styles/'));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('package', function(callback) {
  return runSequence(
    'build',
    'bundle',
    ['package-site', 'package-dist', 'package-dependencies', 'package-css'],
    'unbundle',
    callback
  );
});
