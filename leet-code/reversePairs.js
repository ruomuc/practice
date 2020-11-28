/**
 * @param {number[]} nums
 * @return {number}
 */

// 先试一下不讲武德暴力法，果然超时
var reversePairs = function (nums) {
  let res = 0
  const len = nums.length

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > 2 * nums[j]) {
        res++
      }
    }
  }
  return res
}

console.log(reversePairs([1, 3, 2, 3, 1]))

var reversePairs = function (nums) {
  if (nums.length == 0) {
    return 0
  }
  let count = 0
  var mergeSort = function (nums, left, right) {
    if (left == right) {
      return
    }
    const mid = Math.floor((right - left) / 2) + left

    // 递归左右两边
    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)

    // 计数
    let i = left // 左子数组开始位置
    let j = mid + 1 // 右子数组开始位置
    while (i <= mid && j <= right) {
      if (nums[i] > 2 * nums[j]) {
        // 因为是升序的，所以i后面的所有元素都应该满足 nums[i]>2*nums[j]
        count += mid - i + 1
        j++
      } else {
        i++
      }
    }

    // 合并
    const temp = new Array(end - start + 1)
    let idx = 0
    i = left
    j = mid + 1
    while (i <= mid && j <= end) {
      if (nums[i] < nums[j]) {
        temp[index] = nums[i]
        index++
        i++
      } else {
        temp[index] = nums[j]
        index++
        j++
      }
    }

    // 左子数组还没合并完
    while (i <= mid) {
      temp[index] = nums[i]
      index++
      i++
    }
    // 右子数组还没合并完

    while (j <= end) {
      temp[index] = nums[j]
      index++
      j++
    }
    // 把临时数组的赋值给真正的数组
    for (let i = start, k = 0; i <= end; i++, k++) {
      nums[i] = temp[k]
    }
  }
  mergeSort(nums, 0, nums.length - 1)
  return count
}
console.log(reversePairs([1, 3, 2, 3, 1]))
