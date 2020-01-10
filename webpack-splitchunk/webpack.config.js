const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './index.js',
    entry: './entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',// async (by dynamic import), intial (by entry), all (both above) 
      minSize: 1, // minimum size to split into a different chunk
      minChunks: 2, // at least how many times the splitted chunks need to be shared between chunks
      cacheGroups: {
        vendors: {
          test: /vendor\.js/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}