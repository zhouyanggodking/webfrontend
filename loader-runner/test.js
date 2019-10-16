const fs = require('fs')
const path = require('path')
const { runLoaders } = require('loader-runner')

runLoaders({
  resource: './file.txt', // path to resource, optionally including query string
  // string[], paths to loaders
  // {loader, options}[], loader array with options
  loaders: [
    path.resolve(__dirname, './first-loader'), 
    path.resolve(__dirname, './second-loader')
  ], 
  
  // a function to read the resource
  // must have signature function(path, function(err, buffer))
  readSource: fs.readFile.bind(fs)
}, (err, result) => {
  err ? console.error(err) : console.log(result)

  fs.writeFileSync('./output.txt', result.result)
})