/**
 * @param {number} G
 * @param {number} P
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (G, P, group, profit) {
  const len = profit.length
  const mod = Math.pow(10, 9) + 7
  const dp = new Array(len + 1).fill(0).map(item => {
    return new Array(G + 1).fill(0).map(item => {
      return new Array(P + 1).fill(0)
    })
  })

  // 初始化，所有目标利润为0的都一种方案，就是啥都不干。。
  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= G; j++) {
      dp[i][j][0] = 1
    }
  }
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= G; j++) {
      for (let k = 0; k <= P; k++) {
        // 这个是不选择i这个罪,方案数不会变
        dp[i][j][k] = dp[i - 1][j][k]
        if (j - group[i - 1] >= 0) {
          // 如果利润为负数，没有意义
          const nk = Math.max(k - profit[i - 1], 0)
          dp[i][j][k] += dp[i - 1][j - group[i - 1]][nk]
        }
        dp[i][j][k] = dp[i][j][k] % mod
      }
    }
  }

  console.log('dp==', dp, len, G, P)
  return dp[len][G][P] % mod
}

// console.log(profitableSchemes(5, 1, [2, 2], [2, 3]))

// 压缩空间维度
var profitableSchemes = function (G, P, group, profit) {
  const len = profit.length
  const mod = Math.pow(10, 9) + 7
  const dp = new Array(G + 1).fill(0).map(item => {
    return new Array(P + 1).fill(0)
  })

  // 初始化，所有目标利润为0的都一种方案，就是啥都不干。。
  for (let j = 0; j <= G; j++) {
    dp[j][0] = 1
  }

  for (let i = 1; i <= len; i++) {
    for (let j = G; j >= group[i - 1]; j--) {
      for (let k = P; k >= 0; k--) {
        // 如果利润为负数，没有意义
        const nk = Math.max(k - profit[i - 1], 0)
        dp[j][k] += dp[j - group[i - 1]][nk]
        dp[j][k] = dp[j][k] % mod
      }
    }
  }

  console.log('dp==', dp, len, G, P)
  return dp[G][P] % mod
}

console.log(profitableSchemes(5, 1, [2, 2], [2, 3]))
