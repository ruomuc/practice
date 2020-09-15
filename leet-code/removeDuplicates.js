/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let currIndex = 1
  let currVal = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== currVal) {
      currVal = nums[i]
      nums[currIndex] = currVal
      currIndex++
    }
  }
  return currIndex
}

console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3]))
