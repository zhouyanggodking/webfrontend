const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          loader: 'style-loader'
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
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'antherApp.html',
      template: './src/index.html',
      chunks: ['anotherApp', 'commons'], // only inclue certain chunks
      inject: true
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: true,
      cacheGroups: {
        commons: {
          name:'commons'
        }
      },

    }
  }
};