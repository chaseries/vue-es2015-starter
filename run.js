
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var express = require("express");
var path = require("path");
var fs = require("fs");

var compiler = webpack(webpackConfig);

var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options

  contentBase: "./build",
  // Can also be an array, or: contentBase: "http://localhost/",

  hot: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is sent to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does. 

  historyApiFallback: false,
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.

  compress: true,
  // Set this if you want to enable gzip compression for assets

  // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
  // Use "**" to proxy all paths to the specified server.
  // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
  // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).

  setup: function(app) {
    // Here you can access the Express app object and add your own custom middleware to it.
    // For example, to define custom handlers for some paths:
    const rootDir = "/Users/jules/Desktop/vue/build/";

    app.use("/assets", express.static(path.join(__dirname, "/build/assets")));

    app.get('/', function(req, res) {
      res.sendFile("index.html", {root: rootDir})
    });
    app.get('/about', function(req, res) {
      res.sendFile("index.html", {root: rootDir});
    });
    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, "/build/index.html"));
    });
  },

  // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
  staticOptions: {
  },

  clientLogLevel: "info",
  // Control the console log messages shown in the browser when using inline mode. Can be `error`, `warning`, `info` or `none`.

  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  lazy: true,
  filename: "bundle.js",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  // It's a required option.
  publicPath: "",
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true },

});
server.listen(9090, "localhost", function() {});
// server.close();
