const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    layout: './src/Layout.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}