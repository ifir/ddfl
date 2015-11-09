var gulp = require('gulp'),
	  runSequence = require('run-sequence'),
	  browserSync = require('browser-sync');

gulp.task('default', function() {
  return runSequence( ['server', 'watch']);
});

gulp.task('server', function() {
  browserSync.init({
  	files: "**",
    server: './src',
    port: 8888
  });
});

gulp.task('reload', function() {
  return browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch([
    './src/**/*.html',
    './src/**/*.css'
  ], function() {
    runSequence(['reload']);
  })
});