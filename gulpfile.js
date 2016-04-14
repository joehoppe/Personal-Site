var gulpif = require("gulp-if");

var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');

var $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('vet', function () {
    log('Analyzing source with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('styles', function () {
    log('Compiling Less --> CSS');
    log('Destination folder: ' + config.temp);

    return gulp
        .src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
        .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function (done) {
    var files = config.temp + '**/*.css';
    clean(files, done);
});

gulp.task('less-watcher', function () {
    gulp.watch([config.less], ['styles']);
});

gulp.task('wiredep', function () {
    log('Wire up the bower css js and our app js into the html');
    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;
    
    log(config.js); //TODO: remove
    
    /*
    
    todo: need to update wiredep options to find my files correctly
    0:./src/client/app/** /*.module.js
[15:52:06] 1:./src/client/app/** / *.js
[15:52:06] 2:!./src/client/app / ** / *.spec.js
    
    */
    
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

////////////

function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}

function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(item + ":" + msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

/////////////

gulp.task('default', function() {
    gulp.watch([config.less], ['styles']);
})