// 数组-（Sum）找到和为k的两个数字

const arr = [1, 4, 6, 98, 24, 15, 40];
const sum = 21;

const map = new Map(); // key: (sum - item), value: index of item

for(let index = 0; index < arr.length; ++index) {
  let item = arr[index];
  const complementary = sum - item;
  if (map.has(item)) {
    // found
    let preIndex = map.get(item);
    console.log([arr[preIndex], item]);
    break;
  }
  if (!map.has(complementary)) {
    map.set(complementary, index);
  }
}

