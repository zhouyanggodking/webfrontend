var a = 1;
// module.exports = a;
var b = require('./b');
console.log(`In a: ${b}`);
a = b + 1;
module.exports = a;