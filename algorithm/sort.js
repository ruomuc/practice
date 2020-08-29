var arr = [1, 9, 30, 25, 25, 17, 15, 81]
function bubble (arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSort = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // '<'从大到小 '>'从小到大
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        isSort = true
      }
    }
    if (!isSort) {
      // 如果没有移动过元素
      console.log('没有移动过，可以终止')
      break
    }
  }
  console.log('冒泡排序,从小到大', arr)
}

bubble(arr)

function insertSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      // '>'从小到大 <'从大到小
      if (arr[j] < element) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = element
  }
  console.log('插入排序,从小到大：', arr)
}
insertSort(arr)

function mergeSort (arr) {
  let left = 0
  let right = arr.length - 1
  sort(arr, left, right)
  console.log('归并排序，从小到大：', arr)
}

function sort (arr, left, right) {
  if (right <= left) {
    return
  }
  let middle = parseInt((left + right) / 2)
  sort(arr, left, middle)
  sort(arr, middle + 1, right)
  merge(arr, left, right)
}

function merge (arr, left, right) {
  const temp = []
  const middle = parseInt((left + right) / 2)
  let k = left
  let p1 = left
  let p2 = middle + 1

  while (p1 <= middle && p2 <= right) {
    if (arr[p1] <= arr[p2]) {
      temp[k] = arr[p1]
      k++
      p1++
    } else {
      temp[k] = arr[p2]
      k++
      p2++
    }
  }

  // 考虑单个元素情况
  while (p1 <= middle) {
    temp[k] = arr[p1]
    k++
    p1++
  }
  while (p2 <= right) {
    temp[k] = arr[p2]
    k++
    p2++
  }
  // 拷贝出去
  for (let i = left; i <= right; i++) {
    arr[i] = temp[i]
  }
}

mergeSort(arr)

var arr = [111, 19, 30, 25, 25, 12, 17, 15, 81]

function quickSort (arr, left, right) {
  let i, j, temp, t

  if (left >= right) {
    return
  }

  i = left
  j = right
  flag = left

  temp = arr[flag]
  while (i < j) {
    // 先看右边，依次往左递减
    while (temp <= arr[j] && i < j) {
      j--
    }
    // 再看左边，依次往右递增
    while (temp >= arr[i] && i < j) {
      i++
    }
    t = arr[j]
    arr[j] = arr[i]
    arr[i] = t
  }
  arr[flag] = arr[i]
  arr[i] = temp
  // 递归调用左半数组
  quickSort(arr, left, j - 1)
  // 递归调用右半数组
  quickSort(arr, j + 1, right)
}

quickSort(arr, 0, arr.length - 1)
console.log('快速排序，从小到大', arr)
