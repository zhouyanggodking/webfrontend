﻿const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname), // absolute string containing entry files
  entry: {
    app: './src/main.js',
    anotherApp: './src/anotherApp.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          // loader: 'style-loader'
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'mainApp.html',
      template: './src/index.html',
      chunks: ['app', 'commons'], // only inclue certain chunks
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'antherApp.html',
      template: './src/index.html',
      chunks: ['anotherApp', 'commons'], // only inclue certain chunks
      inject: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash].css"
    })
  ],
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    //   minSize: 0,
    //   name: true,
    //   cacheGroups: {
    //     commons: {
    //       name:'commons'
    //     }
    //   },
    // },
    runtimeChunk: {
      name: 'manifest'
    }
  }
};