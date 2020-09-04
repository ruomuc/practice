/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  let count = 0
  for (let i = 0; i < coins.length; i++) {
    count += parseInt((coins[i] + 1) / 2)
  }
  return count
}

console.log(minCount([4,2,1]))