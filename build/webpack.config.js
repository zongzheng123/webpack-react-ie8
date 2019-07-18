const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Es3ifyPlugin = require('es3ify-webpack-plugin');
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    es5polyfill: 'es5-polyfill',
    babelPolyfill: 'babel-polyfill',
    main: './main.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname,  '../dist')
  },
  resolve: {
    extensions: [ '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [ {
      test: /\.less$/,
      use: [ 'style-loader','css-loader', 'less-loader', 'postcss-loader'], // compiles Less to CSS
    },{
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader','css-loader',  'postcss-loader'],
    },{
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader'
        }
      ]
    }]
  },
  plugins: [
    // new Es3ifyPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      file: 'index.html',
      chunks: ['es5polyfill', 'babelPolyfill', 'main'],
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
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