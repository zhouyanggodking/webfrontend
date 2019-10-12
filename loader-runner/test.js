const fs = require('fs')
const path = require('path')
const { runLoaders } = require('loader-runner')

runLoaders({
  resource: './file.txt',
  loaders: [path.resolve(__dirname, './my-loader')],
  readSource: fs.readFile.bind(fs)
}, (err, result) => {
  err ? console.error(err) : console.log(result)

  fs.writeFileSync('./output.txt', result.result)
})