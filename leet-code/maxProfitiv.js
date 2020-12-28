// 和买卖股票的最佳时机 III写法一样

var maxProfit = function (k, prices) {
  const m = prices.length
  if (m === 0) {
    return 0
  }

  // dp[i][j][k] i-代表第几天 j-代表交易了多少次 k-代表当前买卖状态
  const dp = new Array(m).fill(0).map(item => {
    return new Array(k + 1).fill(0).map(item => {
      return new Array(2).fill(0)
    })
  })

  // 初始化第一天的数据
  for (let i = 0; i <= k; i++) {
    dp[0][i][1] = -prices[0]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j <= k; j++) {
      if (j < k) {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j + 1][1] + prices[i])
      } else {
        dp[i][j][0] = dp[i - 1][j][0]
      }
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j][0] - prices[i])
    }
  }

  let max = 0
  for (let i = 0; i <= k; i++) {
    max = Math.max(max, dp[m - 1][i][0])
  }
  return max
}


// 空间复杂度优化
var maxProfit = function (k, prices) {
  const m = prices.length
  if (m === 0) {
    return 0
  }

  // dp[i][j][k] i-代表第几天 j-代表交易了多少次 k-代表当前买卖状态
  const dp = new Array(m).fill(0).map(item => {
    return new Array(k + 1).fill(0).map(item => {
      return new Array(2).fill(0)
    })
  })

  // 初始化第一天的数据
  for (let i = 0; i <= k; i++) {
    dp[0][i][1] = -prices[0]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j <= k; j++) {
      if (j < k) {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j + 1][1] + prices[i])
      } else {
        dp[i][j][0] = dp[i - 1][j][0]
      }
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j][0] - prices[i])
    }
  }

  let max = 0
  for (let i = 0; i <= k; i++) {
    max = Math.max(max, dp[m - 1][i][0])
  }
  return max
}