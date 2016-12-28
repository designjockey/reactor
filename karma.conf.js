process.env.NODE_ENV = 'development';
const webpackConfig = require('./webpack.config.js');

webpackConfig.devtool = 'inline-source-map';

module.exports = function karmaConfig(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['jasmine'],

    files: [
      'test/jasmine/index.js',
    ],

    preprocessors: {
      'test/jasmine/index.js': ['webpack', 'sourcemap'],
    },

    plugins: [
      'karma-phantomjs-launcher',
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-babel-preprocessor',
    ],

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true,
    },

    logLevel: config.LOG_INFO,

    babelPreprocessor: {
      options: {
        presets: ['es2015', 'react'],
      },
    },

    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true,
        version: false,
        assets: false,
        chunks: false,
        chunkModules: false,
      },
    },
  });
};
