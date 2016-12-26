const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const webpackConfig = {
  entry: __dirname + '/app/app.js',
  context: __dirname + '/app/components',
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
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.json', '.js'],
    root: __dirname + '/app'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  devServer: {
    contentBase: __dirname + '/app',
    hot: true
  }
};

if (isProduction) {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    mangle: false,
    beautify: true,
    'screw-ie8': true,
    compress: true
  }));
}

module.exports = webpackConfig;
