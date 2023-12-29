const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function compileSass() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
}

function scripts() {
  return gulp.src('src/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
}

function watchFiles() {
  gulp.watch('./src/scss/**/*.scss', compileSass);
  gulp.watch('src/js/*.js', scripts);
}

// Tarea 'default' que ejecuta ambas tareas en paralelo y luego inicia el modo de observación
gulp.task('default', gulp.parallel(compileSass, scripts, watchFiles));

// Asegúrate de devolver la Promise dentro de tus tareas si están utilizando funciones asíncronas
gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
});

// Asegúrate de devolver la Promise dentro de tus tareas si están utilizando funciones asíncronas
gulp.task('watchFiles', function () {
  gulp.watch('./src/scss/**/*.scss', compileSass);
  gulp.watch('src/js/*.js', scripts);
  return Promise.resolve(); // Señala la finalización asíncrona
});
