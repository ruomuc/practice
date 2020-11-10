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
  reverse(nums, i)
  return nums
}

function reverse (nums, i) {
  while (i + 1 < nums.length) {
    let temp = nums[i]
    nums[i] = nums[i + 1]
    nums[i + 1] = temp
  }
}