var gulp = require('gulp');
var copy = require('gulp-copy');
var watch = require('gulp-watch');
var del = require('del');

var paths = {
  htmlsrc: ['./client/**/*.html'],
  destination: './public'
};

gulp.task('default', ['copy', 'watch']);

gulp.task('copy', ['clean'], function(){
  return gulp.src(paths.htmlsrc)
    .pipe(copy(paths.destination, {prefix: 1}));
});

gulp.task('watch', function(){
  watch(paths.htmlsrc, function(){
    gulp.start('copy');
  });
});

gulp.task('clean', function(){
  return del(['./public/**/*', '!./public/app.js']);
});
