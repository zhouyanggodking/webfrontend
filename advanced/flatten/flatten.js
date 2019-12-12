// const flatten = arr => {
//   while (arr.some(Array.isArray)) {
//     arr = [].concat(...arr)
//   }
//   return arr;
// };

const flatten = arr => {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
};

const arr = [1, [2, [4, [5, 6]]], 7, 8];
console.log(flatten(arr));
