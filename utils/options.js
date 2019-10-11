function getProperty(obj, path) {
	let name = path.split(".");
	for (let i = 0; i < name.length - 1; i++) {
		obj = obj[name[i]];
		if (typeof obj !== "object" || !obj || Array.isArray(obj)) return;
	}
	return obj[name.pop()];
};

var obj = {
  a: {
    b: {
      c: 'king'
    }
  }
}

const val = getProperty(obj, 'a.b.c')

console.log(val)
console.log(obj)