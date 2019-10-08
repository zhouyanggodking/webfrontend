const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

webpack(webpackConfig, error => {
  console.log(error);
})