const path = require('path')
const MyCustPlugin = require('./my-cust-plugin')
const TestPlugin = require('./test-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename:'main-dist.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'web_loaders')
    ]
  },
  plugins: [
    new MyCustPlugin(),
    new TestPlugin()
  ]
}