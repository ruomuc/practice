/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  // 题目规定和不会超过1000
  let len = nums.length
  let dp = new Array(len).fill(0).map(() => new Array(2 * 1000 + 1).fill(0))
  // 初始化第一行
  dp[0][-nums[0] + 1000] += 1
  dp[0][nums[0] + 1000] += 1
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < 2 * 1000 + 1; j++) {
      dp[i][j] = (dp[i - 1][j - nums[i]] || 0) + (dp[i - 1][j + nums[i]] || 0)
    }
  }
  return S > 1000 ? 0 : dp[nums.length - 1][S + 1000]
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
