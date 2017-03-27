var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

var rules = utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
rules.push({
  test: /\/leonardo.js/,
  use: [
    'script-loader'
  ]
});

var chunks = ['mock','app'];

module.exports = merge(baseWebpackConfig, {
  entry: {
    mock: './src/mock.js'
  },
  module: {
    rules: rules
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: chunks,
      chunksSortMode: (c1, c2) => {
        let orders = chunks;
        let o1 = orders.indexOf(c1.names[0]);
        let o2 = orders.indexOf(c2.names[0]);
        return o1 - o2;
      }
    }),
    new FriendlyErrorsPlugin()
  ]
})
