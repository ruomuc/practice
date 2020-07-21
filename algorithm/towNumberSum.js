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
  throw new Error('没有符合条件的数')
}
console.log('dictMap ---', dictMap(array, target))


/**
 * 快排+二分查找实现 时间O(nlogn) 空间O(logn)
 */

function bSearch(array, startIndex, endIndex, target) {
  if (startIndex > endIndex) {
    return -1;
  }
  const middle = ~~([startIndex + endIndex] / 2);
  if (array[middle] > target) {
    bSearch(array, startIndex, middle - 1)
  }
  if (array[middle] < target) {
    bSearch(array, middle + 1, endIndex)
  }
  if (array[middle] === target) {
    return middle;
  }
}

function quickSort(array, target) {
  // 这里假设已经从小到大排序好了这个数组，就不重复写一遍快排了 
  for (let index = 0; index < array.length; index++) {
    const element = target - array[index];
    const remaind = bSearch(array, 0, array.length - 1, element)
    if (remaind > -1) {
      return [index, remaind]
    }
  }
  throw new Error('没有符合条件的数')
}

console.log('quickSort', quickSort(array, target))