const gulp = require("gulp")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssImport = require("postcss-import")
const nested = require("postcss-nested")
const cssVars = require("postcss-simple-vars")
const mixins = require("postcss-mixins")

gulp.task("styles", () => {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([autoprefixer(), cssVars, cssImport, mixins, nested]))
    .pipe(gulp.dest("./app/temp"))
})

gulp.task("cssInject", () => {
  return gulp.src("./app/temp/styles.css").pipe(browserSync.stream())
})
