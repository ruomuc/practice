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
    console.log('cache', cache)
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
