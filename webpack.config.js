const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction);

const webpackConfig = {
  entry: `${__dirname}/app/app.js`,
  context: `${__dirname}/app/components`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      `${__dirname}/app`
    ],
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
  devServer: {
    contentBase: `${__dirname}/app`,
    hot: true,
  },
};

if (isProduction) {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    mangle: false,
    beautify: false,
    'screw-ie8': true,
    compress: true,
    warnings: false,
  }));
}

module.exports = webpackConfig;
