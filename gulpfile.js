var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp.src('minjs/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', function(){
  gulp.src('public/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('minjs'));
});
