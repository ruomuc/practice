/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let currIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      let temp = nums[i]
      nums[i] = nums[currIndex]
      nums[currIndex] = temp
      currIndex++
    }
  }
  return currIndex
}

console.log(removeElement([3, 2, 3], 3))
