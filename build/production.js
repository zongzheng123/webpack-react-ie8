const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports =  merge(webpackConfig, {
  mode: 'production',
  // devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin()
  ]
})