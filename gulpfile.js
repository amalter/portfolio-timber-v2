import gulp from "gulp";
import source from "vinyl-source-stream";
import bro from "gulp-bro";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps"; // Added source maps

const sass = gulpSass(dartSass);

gulp.task("styles", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sourcemaps.init()) // Initialize source maps
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write(".")) // Write source maps to the same directory
    .pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", function () {
  return gulp
    .src("src/js/main.js")
    .pipe(sourcemaps.init()) // Initialize source maps
    .pipe(
      bro({
        transform: [["babelify", { presets: ["@babel/preset-env"] }]],
      })
    )
    .pipe(uglify())
    .pipe(rename("all.min.js"))
    .pipe(sourcemaps.write(".")) // Write source maps to the same directory
    .pipe(gulp.dest("dist/js"));
});

gulp.task("watch", function () {
  gulp.watch("src/scss/**/*.scss", gulp.series("styles"));
  gulp.watch("src/js/**/*.js", gulp.series("scripts"));
});

gulp.task("default", gulp.parallel("styles", "scripts", "watch"));
