/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profix = 0
  for (let i = 1; i < prices.length; i++) {
    const temp = prices[i] - prices[i - 1]
    profix += temp > 0 ? temp : 0
  }
  return profix
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
