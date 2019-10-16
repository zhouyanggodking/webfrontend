// module.exports = (input) => input +  input;  // sync loader


// async loader, need to inject this, so cannot user () => {} (arrow function)
module.exports = function(input) { 
  const callback = this.async();

  // signature: function(error, content, sourceMap, )
  callback(null, input + input);
}


module.exports.pitch = function(remainingReq, precedingReq, input) {
  console.log('pitch - second')
  console.log(`remaining req: ${remainingReq}`);
  console.log(`preceding req: ${precedingReq}`);  
}
