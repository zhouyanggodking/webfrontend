module.exports = function(content, map, meta) {
  console.log(content);
  // return `module.exports = ${JSON.stringify(content)}`
  this.callback(null, `module.exports = ${JSON.stringify(content)}`, map, meta)
};

// module.exports.raw = true