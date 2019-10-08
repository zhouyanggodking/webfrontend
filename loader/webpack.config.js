// const MyCustLoader = require('./web_loaders/my-cust-image-loader')
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename:'main-dist.js'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'my-cust-image-loader'
          }
        ]
      }
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'web_loaders')
    ]
  }
}