var gulp = require('gulp');
var tinypng = require('gulp-tinypng');


gulp.task('tinypng', function () {
    gulp.src('images/**/*.*')
        .pipe(tinypng('API KEY GOES HERE'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function(){
  console.log('Default Task is working');
});

// Commands for task
// gulp
// gulp tinypng
