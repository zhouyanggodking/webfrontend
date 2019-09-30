var a = require('./a');
console.log(`in b: ${a}`);
console.log(`in b: ${JSON.stringify(a)}`)
var b = a + 1;
module.exports = b;