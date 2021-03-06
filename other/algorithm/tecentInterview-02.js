// 2. 对一个数组进行乱序排序，要求每个元素落到任意位置的概率相同，且不会落到原来的位置。

const obj1 = { obj: 1 };
const obj2 = { obj2: 2 };
const obj3 = { obj3: 3 };
const arr = [obj1, obj2, obj3];

function sort(arr) {
  const newArr = [];
  // ...
  for (let i = 0, c, len = arr.length; i < len; i++) {
    c = ~~(Math.random() * (i + 1))
    if (c !== i) {
      newArr[i] = newArr[c];
    }
    newArr[c] = arr[i];
  }
  return newArr;
}
console.log(sort(arr))