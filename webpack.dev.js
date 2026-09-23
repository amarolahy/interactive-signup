const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    devMiddleware: {
      publicPath: '/dist/',
    },
    hot: true,
    open: true,
    port: 8080,
  }
});