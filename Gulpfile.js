// Include gulp
var gulp = require('gulp'); 
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

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
		.pipe(gulp.dest(bases.dist));

	// copy views
	gulp.src(bases.app + 'views/*.html')
		.pipe(gulp.dest(bases.dist + 'views'));
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
		.pipe(gulp.dest(bases.dist + '/css'));
});

// concat task
gulp.task('concat', ['clean'], function () {
	gulp.src(bases.app + 'js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('cc-app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(bases.dist + '/js'));
});

// connect
gulp.task('connect', function () {
	connect.server({
		root: 'app/'
	});
});

/** 
 * Register gulp tasks
 **/

gulp.task('default', ['clean', 'copy', 'bundle', 'concat']);
gulp.task('connect', ['connect']);