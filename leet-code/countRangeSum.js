/**暴力循环
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i]
    if (nums[i] >= lower && nums[i] <= upper) {
      count++
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= lower && sum <= upper) {
        count++
      }
    }
  }
  return count
}

console.log(countRangeSum([0, 0], 0, 0))
