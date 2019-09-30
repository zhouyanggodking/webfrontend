// var module = {
//   exports: {}
// };

const rq = require;
const fs = rq('fs');

function require(path) {
  const mod = require.module[path];
  if (!mod) {
    throw new Error(`Failed to require ${path}`);
  }
  if (!mod.exports) {
    mod.exports = {};
    mod.call(mod.exports, mod, mod.exports, require)
  }
}

require.module = {};
const f = fs.readFileSync('./js/main.js', 'utf-8')

console.log(f)
