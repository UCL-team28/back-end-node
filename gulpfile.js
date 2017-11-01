var gulp = require('gulp');

var exec = require('child_process').exec;

gulp.task('start', function (callback) {
	    exec('node server/app.js', function (err, stdout, stderr) {
		            console.log(stdout);
		            console.log(stderr);
		            callback(err);
		        });
});
