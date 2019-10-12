// module.exports = (input) => input +  input;  // sync loader

module.exports = function(input) { // async loader, need to inject this, so cannot user () => {} (arrow function)
  const callback = this.async();

  callback(null, input + input);
}
