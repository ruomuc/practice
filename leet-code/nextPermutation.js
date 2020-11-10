/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length === 0) {
    return nums
  }
  let i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  if (i >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[i] >= nums[j]) {
      j--
    }
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  // quickSort(nums, i + 1, nums.length - 1)
  reverse(nums, i + 1)
  return nums
}

function reverse (nums, i) {
  let left = i
  let right = nums.length - 1
  while (left < right) {
    const temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--
  }
}

function quickSort (arr, left, right) {
  if (left >= right) {
    return
  }

  let i = left
  let j = right
  let flag = arr[left]

  while (i < j) {
    while (i < j && arr[j] >= flag) {
      j--
    }
    while (i < j && arr[i] <= flag) {
      i++
    }
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  arr[left] = arr[j]
  arr[j] = flag
  quickSort(arr, left, j - 1)
  quickSort(arr, j + 1, right)
}

console.log(nextPermutation([3, 2, 1]))
