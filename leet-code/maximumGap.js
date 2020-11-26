/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  const len = nums.length
  if (len < 2) {
    return 0
  }
  nums = nums.sort((a, b) => {
    return a - b
  })
  const prefix = new Array(nums.length).fill(0)
  for (let i = 1; i < len; i++) {
    prefix[i] = nums[i] - nums[i - 1]
  }

  let max = 0
  for (let i = 0; i < len; i++) {
    if (prefix[i] > max) {
      max = prefix[i]
    }
  }
  return max
}

console.log(maximumGap([1, 3, 6, 9]))
