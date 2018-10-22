const path = require('path');

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
  }
};