const { max } = require('lodash')

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER
  let maxP = 0
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i]
    } else if (prices[i] - min > maxP) {
      maxP = prices[i] - min
    }
  }
  return maxP
}

var maxProfit = function (prices) {
  let maxP = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxP) {
        maxP = prices[j] - prices[i]
      }
    }
  }
  return maxP
}
