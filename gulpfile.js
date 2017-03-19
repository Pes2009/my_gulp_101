// var gulp  = require('gulp'),
//     gutil = require('gulp-util');
//
// create a default task and just log a message
// gulp.task('default', function() {
//   return gutil.log('Gulp is running!')
// });

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    asciidoctor = require('gulp-asciidoctor');

const del = require('del');

// define the default task and add the watch task to it
gulp.task('default', ['connect', 'watch']);

gulp.task('docs', ['html', 'css', 'javascript']);

gulp.task('clean', function() {
  return del(['docs/assets/**', 'docs/*.html']).then(paths => {
    console.log('Files and folders to be deleted:\n', paths.join('\n'));
  });
});

// configure the jshint task
gulp.task('javascript', function() {
  return gulp.src('src/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('docs/assets/js'))
    .pipe(livereload());
});

gulp.task('css', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('docs/assets/stylesheets'))
    .pipe(livereload());
});

gulp.task('html', function() {
  return gulp.src('src/html/*.html')
    .pipe(gulp.dest('docs'))
    .pipe(livereload());
});

gulp.task('adoc', function() {
  return gulp.src('src/adoc/**/*.adoc')
    .pipe(asciidoctor({
      safe: 'safe', // unsafe, safe, server or secure
      doctype: 'article',
      header_footer: true,
      attributes: ['showtitle']
    }))
    .pipe(gulp.dest('docs'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen({ basePath: './docs' });
  // or run in terminal
  //   1. livereload docs
  //   2. gulp

  gulp.watch('src/javascript/**/*.js', ['javascript']);
  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('src/html/*.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: './docs',
    livereload: true
  });
});
