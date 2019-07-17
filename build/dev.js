const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

console.dir(webpackConfig)

const config = merge(webpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    compress: true,
    port: 9000,
    hot: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})


module.exports = config
// webpack(webpackConfig, (err, stats) => { // Stats Object
//   if (err || stats.hasErrors()) {
//     // Handle errors here
//   }
//   // Done processing
// })