/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length
  let buy = prices[0] + fee
  let profit = 0
  for (let i = 1; i < n; i++) {
    if (prices[i] + fee < buy) {
      buy = prices[i] + fee
    } else if (prices[i] > buy) {
      profit += prices[i] - buy
      buy = prices[i]
    }
  }
  return profit
}

// console.log(maxProfit([1, 3, 7, 5, 10, 3], 3))
console.log(maxProfit([1, 4, 2, 8, 4, 9], 2))
