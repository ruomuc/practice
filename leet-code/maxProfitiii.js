//================递归=============================//
//================================================//
//================================================//
//================================================//

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0
  }
  return dfs(prices, 0, 0, 0)
}

/**
 * @param {*} prices
 * @param {*} index 第几天
 * @param {*} status 状态 1-持有
 * @param {*} k 交易了几次
 */
var dfs = function (prices, index, status, k) {
  if (index === prices.length || k === 2) {
    return 0
  }

  // 定义三个变量分别记录 保持不动，买，卖
  let [a, b, c] = [0, 0, 0]
  a = dfs(prices, index + 1, status, k)

  if (status === 1) {
    // 如果持有一个股票，考虑卖出的情况
    b = dfs(prices, index + 1, 0, k + 1) + prices[index]
  } else {
    // 如果没有持有股票，考虑买入的情况
    c = dfs(prices, index + 1, 1, k) - prices[index]
  }
  // 返回三者的最大值
  return Math.max(a, b, c)
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))

//================记忆化搜索优化====================//
//================================================//
//================================================//
//================================================//

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const m = prices.length
  if (m === 0) {
    return 0
  }

  const profitMap = new Array(m).fill(0).map(item => {
    return new Array(2).fill(0).map(item => {
      return new Array(2).fill(0)
    })
  })
  return dfs(profitMap, prices, 0, 0, 0)
}

/**
 * @param {*} prices
 * @param {*} index 第几天
 * @param {*} status 状态 1-持有
 * @param {*} k 交易了几次
 */
var dfs = function (profitMap, prices, index, status, k) {
  if (index === prices.length || k === 2) {
    return 0
  }

  // 从缓存中找
  const cache = profitMap[index][status][k]
  if (cache > 0) {
    return cache
  }

  // 定义三个变量分别记录 保持不动，买，卖
  let [a, b, c] = [0, 0, 0]
  a = dfs(profitMap, prices, index + 1, status, k)

  if (status === 1) {
    // 如果持有一个股票，考虑卖出的情况
    b = dfs(profitMap, prices, index + 1, 0, k + 1) + prices[index]
  } else {
    // 如果没有持有股票，考虑买入的情况
    c = dfs(profitMap, prices, index + 1, 1, k) - prices[index]
  }
  // 返回三者的最大值
  const max = Math.max(a, b, c)
  // 存入缓存
  profitMap[index][status][k] = max
  return max
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))

//================动态规划========================//
//=golang的递归+记忆化搜索也超时了，只能动态规划了=//
//================================================//
//================================================//

var maxProfit = function (prices) {
  const m = prices.length
  if (m === 0) {
    return 0
  }

  // dp[i][j][k] i-代表第几天 j-代表交易了多少次 k-代表当前买卖状态
  // 本题交易次数默认为2
  const dp = new Array(m).fill(0).map(item => {
    return new Array(3).fill(0).map(item => {
      return new Array(2).fill(0)
    })
  })

  // 初始化第一天的数据
  for (let i = 0; i <= 2; i++) {
    dp[0][i][1] = -prices[0]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j <= 2; j++) {
      if (j < 2) {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j + 1][1] + prices[i])
      } else {
        dp[i][j][0] = dp[i - 1][j][0]
      }
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j][0] - prices[i])
    }
  }

  let max = 0
  for (let i = 0; i < 3; i++) {
    max = Math.max(max, dp[m - 1][i][0])
  }
  return max
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
