var entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

// 要求转换成如下对象
var output = {
  a: {
   b: {
     c: {
       dd: 'abcdd'
     }
   },
   d: {
     xx: 'adxx'
   },
   e: 'ae'
  }
}

const convert = entry => {
  const obj = {};
  Object.keys(entry).map(keyItem => keyItem.split('.'))
    .forEach(keyArr => {
      let currObj = obj;
      for(let index = 0; index < keyArr.length; ++index) {
        const key = keyArr[index];
        if (!currObj[key]) {
          currObj[key] = index === keyArr.length - 1 ? entry[keyArr.join('.')]: {};
        }
        currObj = currObj[key];// 相当于指针移动
      }
    });
  return obj;
}

const convert_output = (output, keyPath = '', result = {}) => {  
  Object.keys(output).forEach(key => {
    const keyName = `${keyPath}${key}`;
    if (typeof output[key] === 'object') {
      convert_output(output[key], `${keyName}.`, result)
    } else {
      result[keyName] = output[key];
    }
  })
  return result;
}

console.log(convert_output(output))
