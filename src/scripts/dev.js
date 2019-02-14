const webpack = require("webpack");
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../config/webpack.config');
const express = require('express');
const app = express();
const path = require('path');

const compiler = webpack(webpackConfig, function problems(err, stats) {
  console.log(err);
  console.log(stats);
});
// app.use(middleware(compiler, {
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath
// }));

// app.listen(3000, () => console.log('Example app listening on port 3000!'))

// compiler.watch({}, function running() {
//   console.log(arguments);
// })