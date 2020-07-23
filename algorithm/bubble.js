/**
 * 冒泡排序
 */

const arr = [1, 2, 90, 29, 32, 17, 51, 100, 99, 3, 9, 8, 6, 2];

/**
 * 冒泡排序
 * @param {*} arr 
 * @param {*} order 
 */
function bubblePop(array, order) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if ((array[j] < array[j + 1] && order === 'DESC') || (array[j] > array[j + 1] && order === 'ASC')) {
        const temp = arr[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubblePop(arr, 'DESC'))
console.log(bubblePop(arr, 'ASC'))
