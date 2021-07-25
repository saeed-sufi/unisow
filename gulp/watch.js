const gulp = require("gulp")
const { series } = require("gulp")
const browserSync = require("browser-sync").create()

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: "app",
      index: "campaign.html",
    },
  })

  gulp.watch("./app/campaign.html", function reload(cb) {
    browserSync.reload()
    cb()
  })

  gulp.watch("./app/assets/styles/**/*.css", series('styles', 'cssInject'))
})

