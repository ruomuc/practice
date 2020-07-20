const array = [1, 3, 4, 5];
const target = 7;

/**
 * 暴力解题法 时间 O(n^2) 空间 O(1)
 * @param {*} arr 
 * @param {*} target 
 * @returns [x,y] 下标数组
 */
function violence(arr, target) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (target - arr[i] == arr[j]) {
        console.log(i, j)
        result.push(i, j)
        return result
      }
    }
  }
  throw new Error('没有符合条件的数')
}

console.log('violence ---', violence(array, target));

/**
 * 字典实现 时间O(n) 空间O(n)
 * @param {*} array 
 * @param {*} target 
 * @returns [x,y] 下标数组
 */
function dictMap(arr, target) {
  const map = {};
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    map[element] = index;
  }
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const remaind = target - element;
    if (map.hasOwnProperty(remaind)) {
      console.log()
      return [index, map[remaind]]
    }
  }
}
console.log('dictMap ---', dictMap(array, target))

/**
 * 快排实现
 * @param {*} array 
 * @param {*} target 
 */
function quickSort(array, target) {
 // ...
}