const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    App: "./app/assets/scripts/App.js",
  },
  output: {
    path: path.resolve(__dirname, "./app/temp"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
}
