const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    main: './main.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname,  '../dist')
  },
  resolve: {
    extensions: [ '.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader'
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, '../src/index.html'),
      file: 'index.html',
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: true,
          keep_fnames: false,
        },
      }),
    ],
  }
}