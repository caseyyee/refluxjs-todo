var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var reactify = require('reactify');
var notify = require("gulp-notify");

var scriptsDir = './src/scripts';
var buildDir = './dist';

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {
  var props = watchify.args;
  props.entries = [scriptsDir + '/' + file];
  props.debug = true;
  
  var bundler = watch ? watchify(browserify(props)) : browserify(props);
  
  bundler.transform(reactify);
  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
      }))
      .pipe(source(file))
      .pipe(buffer())
	        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
	      	.pipe(sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest(buildDir + '/js/'));
  }
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });
  return rebundle();
}

gulp.task('styles', function() {
   gulp.src('./src/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('build', function() {
  return buildScript('main.jsx', false);
});
 
 
gulp.task('default', ['build'], function() {
  return buildScript('main.jsx', true);
});


//gulp.task('default', ['scripts', 'styles']);