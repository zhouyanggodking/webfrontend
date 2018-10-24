const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname), // absolute string containing entry files
  entry: {
    app: './src/main.js',
    anotherApp: './src/anotherApp.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false,
    compress: true,
    port: 9090,
    open: true,
    openPage: 'mainApp.html',
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true
      }
    },
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false,
      watch: true
    }
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
    }),
    new webpack.HotModuleReplacementPlugin()
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
  }
};