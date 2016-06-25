const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  entry: __dirname + '/app/app.js',
  context: __dirname + '/app',
  output: { 
  	path: __dirname + '/dist',
  	filename: 'app.js' 
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  extensions: ['', '.js'],
  resolve: {
    extensions: ['', '.js'],
    root: __dirname + '/app'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ],
  devServer: {
    contentBase: __dirname + '/app',
    hot: true
  }
};
