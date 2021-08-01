const gulp = require("gulp")
const { series } = require("gulp")
const browserSync = require("browser-sync").create()

gulp.task("cssInject", () => {
  return gulp.src("./app/temp/styles.css").pipe(browserSync.stream())
})

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: "app",
      index: "index.html",
    },
  })

  gulp.watch("./app/index.html", function reload(cb) {
    browserSync.reload()
    cb()
  })

  gulp.watch("./app/assets/styles/**/*.css", series('styles', 'cssInject'))
})

