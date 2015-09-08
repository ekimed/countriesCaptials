// Include gulp
var gulp = require('gulp'); 
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

// configuration variables
var paths = {
	libs: [
		'bower_components/angular/angular.min.js',
		'bower_components/angular-route/angular-route.min.js',
		'bower_components/angular-animate/angular-animate.min.js'],
	styles: [
		'app/css/cc-app.css'
	]
};

var bases = {
	app: 'app/',
	dist: 'public/'
};

// clean task
gulp.task('clean', function () {
	return gulp.src(bases.dist)
		.pipe(clean({force: true}));
});

// copy task
gulp.task('copy', ['clean'], function () {
	// copy html
	gulp.src(bases.app + 'index.html')
		.pipe(gulp.dest(bases.dist))
		.pipe(livereload());

	// copy views
	gulp.src(bases.app + 'views/*.html')
		.pipe(gulp.dest(bases.dist + 'views'))
		.pipe(livereload());
});

// bundle task
gulp.task('bundle', ['clean'], function () {
	// bundle JS files
	gulp.src(paths.libs)
		.pipe(concat('bundle.min.js'))
		.pipe(gulp.dest(bases.dist + '/js'));
	// bundle css files
	gulp.src(paths.styles)
		.pipe(concat('bundle.min.css'))
		.pipe(gulp.dest(bases.dist + '/css'))
		.pipe(livereload());
});

// concat task
gulp.task('concat', ['clean'], function () {
	gulp.src(bases.app + 'js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('cc-app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(bases.dist + '/js'))
		.pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(bases.app + '**/*', ['clean', 'bundle', 'copy', 'concat']);
})

// connect
gulp.task('connect', function () {
	connect.server({
		root: 'public/'
	});
});

/** 
 * Register gulp tasks
 **/

gulp.task('default', ['clean', 'copy', 'bundle', 'concat', 'watch']);