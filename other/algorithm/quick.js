const arr = [4, 7, 4, 3, 5, 6, 2, 8, 1]

/**
 * 单边循环快速排序
 * @param {*} arr 
 * @param {*} startIndex 
 * @param {*} endIndex 
 * @param {*} sortRule 
 */
function quickSort(arr, startIndex, endIndex, sortRule) {
  if (startIndex >= endIndex) {
    return;
  }
  let sIndex = partition(arr, startIndex, endIndex, sortRule);
  console.log(arr)
  quickSort(arr, startIndex, sIndex - 1, sortRule);
  quickSort(arr, sIndex + 1, endIndex, sortRule);
}

function partition(arr, startIndex, endIndex, sortRule) {
  let sElement = arr[startIndex]; // 基准元素，可以随便取一个
  let mark = startIndex; // 标记位初始化
  for (let index = startIndex + 1; index <= endIndex; index++) {
    const element = arr[index];
    if ((element < sElement && sortRule == 'ASC') || (element > sElement && sortRule == 'DESC')) {
      mark++;
      arr[index] = arr[mark];
      arr[mark] = element;
    }
  }
  arr[startIndex] = arr[mark];
  arr[mark] = sElement;
  return mark;
}

quickSort(arr, 0, arr.length - 1, 'ASC')

module.exports = {
  quickSort
}