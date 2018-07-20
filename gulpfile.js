var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function(){
  return gulp.src('img/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('website/classicvinewood/img/covers/'))
});

gulp.task('images', function(){
  return gulp.src('**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('website/classicvinewood/img/covers/'))
});

var del = require('del');
gulp.task('clean:dist', function() {
  return del.sync('dist');
})