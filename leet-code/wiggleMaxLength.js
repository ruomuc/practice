/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) {
    return nums.length
  }
  let last = nums[1] - nums[0]
  let ans = last !== 0 ? 2 : 1
  let i = 2
  while (i < nums.length) {
    const chazhi = nums[i] - nums[i - 1]
    if ((chazhi > 0 && last <= 0) || (chazhi < 0 && last >= 0)) {
      last = chazhi
      ans++
    }
    i++
  }
  return ans
}

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))
