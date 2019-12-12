const tree = {
  a: 'a',
  b: {
    c: {
      d: 'd'
    },
    e: 'e'
  },
  f: 'f',
  g: {
    h: {
      i: {
        j: 'j'
      }
    },
    k: 'k'
  }
}

const bft = (tree) => { // breadth first traverse
  if (!tree) {
    return;
  } 
  if (!Object.keys(tree).length) {
    console.log(tree);
    return;
  }
  
  const queue = []; // store objects
  queue.push(tree);

  while (queue.length) {
    const currNode = queue.shift();
    const keys = Object.keys(currNode);
    keys.forEach(key => {
      if (typeof currNode[key] === 'object') {// just for this case, no array, no other objects like date, RegEx etc.
        console.log(key);
        queue.push(currNode[key]);
      } else {
        console.log(key);
      }     
      
    });    
  }
}

bft(tree);