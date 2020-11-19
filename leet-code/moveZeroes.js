/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      continue
    }
    let curr = i
    while (curr + 1 < len) {
      // 稍微优化一下
      if (nums[curr + 1] === 0) {
        curr++
        continue
      }
      let temp = nums[curr + 1]
      nums[curr + 1] = nums[curr]
      nums[curr] = temp
      curr++
    }
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]))

var moveZeroes = function (nums) {
  let right = 0
  let left = 0
  let len = nums.length

  while (right < len) {
    if (nums[right] !== 0) {
      let temp = nums[right]
      nums[right] = nums[left]
      nums[left] = temp
      left++
    }
    right++
  }
}
console.log(moveZeroes([0, 1, 0, 3, 12]))
