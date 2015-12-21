var gulp = require('gulp');
// Add plugins here (i.e. Sass too if you're using it)
var autoprefixer = require('gulp-autoprefixer');

//
gulp.task('styles', function() {
  //This sources our files that we need to run through our plugins
  // css/**/*.css would grab all your css files if you have multiples
  gulp.src('css/styles.css')
    //pipe the contents of the styles.css into autoprefixer
    .pipe(autoprefixer())
    // and pipe that into a directory called build or output or whatever you want
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
  gulp.watch('css/styles.css', ['styles']);
});
