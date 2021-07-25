const gulp = require("gulp")
const imagemin = require("gulp-imagemin")
const del = require("del")
const usemin = require("gulp-usemin")
const rev = require('gulp-rev')
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify')

gulp.task("deleteDistFolder", () => {
  return del("./docs")
})

gulp.task('copyGeneralFiles', () => {
  const pathsToCopy = [
    "./app/**/*",
    "!./app/assets/images/**",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/temp",
    "!./app/temp/**",
    "!./app/index.html",
    "!./app/campaign.html",
  ]
  return gulp.src(pathsToCopy)
  .pipe(gulp.dest("./docs"))
})

gulp.task("optimizeImages", () => {
  return gulp
    .src([
      "./app/assets/images/**/*",
      "!./app/assets/images/layout",
      "!./app/assets/images/layout/**/*",
    ])
    .pipe(
      imagemin({
        progressive: true, // optimizes jpg images
        interlaced: true, // helps with gif images
        multipass: true, //helps with svg files
      })
    )
    .pipe(gulp.dest("./docs/assets/images"))
})

// usemin does 3 things with css and js files: 1. copy them to dist folder 2. compress file-size 3. revision
gulp.task("usemin", () => {
  return gulp
    .src(["./app/index.html", "./app/campaign.html"])
    .pipe(
      usemin({
        css: [
          () => {
            return rev()
          },
          () => {
            return cssnano()
          },
        ],
        js: [
          () => {
            return rev()
          },
          () => {
            return uglify()
          },
        ],
      })
    )
    .pipe(gulp.dest("./docs"))
})

gulp.task(
  "build",
  gulp.series("deleteDistFolder", "styles", "scripts", gulp.parallel("optimizeImages", "usemin", "copyGeneralFiles"))
)
