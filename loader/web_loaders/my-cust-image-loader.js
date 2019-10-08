module.exports = function(content, map, meta) {
  console.log(content);
  return `module.exports = ${JSON.stringify(content)}`
};

// module.exports.raw = true