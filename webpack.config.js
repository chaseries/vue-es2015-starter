var path = require("path");


module.exports = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname + "/build"),
    filename: "[name].js"
  },

  module: {
    rules: [
      { test: /\.js$/,
        exclude: [ /node_modules/ ],
        loaders: [
          "babel-loader",
          "eslint-loader",
        ]
      },
      {
        test: /\.vue$/,
        exclude: [ /node_modules/ ],
        loaders: [
          "vue-loader"
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  }
}
