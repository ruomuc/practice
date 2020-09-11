/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++
      }
    }
    result[i] = count
  }
  return result
}

var smallerNumbersThanCurrent = function (nums) {
  // js数组是引用传递，要拷贝一下
  let temp = []
  for (let i = 0; i < nums.length; i++) {
    temp[i] = nums[i]
  }
  // 快速排序
  quickSort(temp, 0, temp.length - 1)

  let tempMap = new Map()
  for (let i = 0; i < temp.length; i++) {
    // 这里避免值相同，覆盖下标
    if (!tempMap.has(temp[i])) {
      tempMap.set(temp[i], i)
    }
  }

  console.log(tempMap)
  let result = []
  for (let i = 0; i < nums.length; i++) {
    result[i] = tempMap.get(nums[i])
  }
  return result
}

var quickSort = function (arr, left, right) {
  if (left >= right) {
    return arr
  }
  let i, j, flag
  i = left
  j = right
  flag = arr[left]

  while (i < j) {
    while (flag <= arr[j] && i < j) {
      j--
    }
    while (flag >= arr[i] && i < j) {
      i++
    }
    let temp
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  arr[left] = arr[i]
  arr[i] = flag
  console.log(i, j, arr)
  quickSort(arr, left, j - 1)
  quickSort(arr, j + 1, right)
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
