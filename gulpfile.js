const gulp = require("gulp")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssImport = require("postcss-import")
const nested = require("postcss-nested")
const cssVars = require("postcss-simple-vars")
const { series } = require("gulp")
const mixins = require("postcss-mixins")
const browserSync = require("browser-sync").create()
const webpack = require("webpack")

function styles() {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([autoprefixer(), cssVars, cssImport, mixins, nested]))
    .pipe(gulp.dest("./app/temp"))
}

function cssInject() {
  return gulp.src("./app/temp/styles.css")
    .pipe(browserSync.stream())
}

function watch() {

  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: 'app',
      index: "campaign.html"
    }
  })

  gulp.watch('./app/campaign.html', function reload (cb) {
    browserSync.reload()
    cb()
  })

  gulp.watch("./app/assets/styles/**/*.css", series(styles, cssInject))
}

function scripts(cb) {
  webpack(require("./webpack.config"), function (err, stats) {
    if (err) {
      console.log(err.toString())
    }

    console.log(stats.toString())
  })
  cb()
}

exports.scripts = scripts
exports.watch = watch
