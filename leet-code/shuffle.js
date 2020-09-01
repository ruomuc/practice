/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let m = 0
  let result = []
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result[i] = nums[m++]
    } else {
      result[i] = nums[n++]
    }
  }
  return result
}
const arr = [1, 3, 5, 2, 4, 6]
console.log(shuffle(arr, 3))

