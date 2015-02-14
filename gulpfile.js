var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var reactify = require('reactify');

gulp.task('browserify', function() {
    var b = browserify();
    b.transform(reactify);
    b.add('./src/scripts/main.js');
    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {

    var bundler = browserify({
        entires: ['./src/scripts/main.js'],
        debug: true
    });

    var bundle = function() {
        return bundler
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
                .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/js'));
    };

    return bundle();
});

gulp.task('less', function() {
   gulp.src('./src/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/styles'));
});
