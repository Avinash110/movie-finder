const gulp = require("gulp");
const {watch} = require("gulp");
const browserify = require("browserify");
const reactify = require("reactify");
const source = require("vinyl-source-stream");

gulp.task('browserify', (done) => {
	browserify('./public/javascripts/index.js')
		.transform('reactify')
		.bundle()
		.on('error', function(err){
	      // print the error (can replace with gulp-util)
	      console.log(err.message);
	      // end this stream
	      this.emit('end');
	    })
		.pipe(source('index.js'))
		.pipe(gulp.dest('build/javascripts'));

	done();
});

gulp.task('copy', (done) => {
	
	gulp.src('./public/index.html')
		.pipe(gulp.dest('build'));

	gulp.src('./public/css/*.*')
		.pipe(gulp.dest('build/css'));

	gulp.src('./public/images/*.*')
		.pipe(gulp.dest('build/images'));

	gulp.src('./public/javascripts/vendors/*.*')
		.pipe(gulp.dest('build/javascripts'));

	done();

});

gulp.task('default', gulp.parallel('browserify','copy'));

watch('public/**/*.*', gulp.parallel('browserify','copy'), (done) => {
	done();
});