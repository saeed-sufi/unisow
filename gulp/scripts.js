const webpack = require("webpack")
const gulp = require('gulp')

gulp.task('scripts',(cb) => {
  webpack(require("../webpack.config"), function (err, stats) {
    if (err) {
      console.log(err.toString())
    }

    console.log(stats.toString())
  })
  cb()
})
