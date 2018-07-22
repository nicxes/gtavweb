var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function() {
    return gulp.src('**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('website/classicvinewood/img/covers/'))
});