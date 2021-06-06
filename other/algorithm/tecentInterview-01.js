
// 1. 一个一维数组内有多个对象，且对象可重复出现，要求写一个函数，返回出现频次最高的对象列表
const obj1 = { obj: 1 };
const obj2 = { obj2: 2 };
const obj3 = { obj3: 3 };
const arr = [obj1, obj2, obj1, obj1, obj3, obj3, obj3];

function find(arr) {
  let result = [];
  const map = new Map();
  arr.forEach(element => {
    if (map.has(element)) {
      let c = map.get(element);
      c++;
      map.set(element, c);
    } else {
      map.set(element, 1);
    }
  });
  console.log(map)
  let max = 0;
  for (let [key, value] of map.entries()) {
    if (max < value) {
      result = [];
      result.push(key);
      max = value;
    } else if (max == value) {
      result.push(key);
    }
  }
  return result;
}