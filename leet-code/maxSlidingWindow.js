/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const n = nums.length
  const ans = []
  for (let i = 0, j = k - 1; i < n && j < n; i++, j++) {
    ans.push(Math.max(...nums.slice(i, j + 1)))
  }
  return ans
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
