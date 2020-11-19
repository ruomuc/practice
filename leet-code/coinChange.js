/**递归，剪枝
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0
  }
  coins = coins.sort((a, b) => b - a)
  let ans = Number.MAX_SAFE_INTEGER
  var shark = function (coins, amount, idx, count) {
    if (amount === 0) {
      // 兑换完了
      ans = Math.min(ans, count)
      return ans
    }
    if (idx === coins.length) {
      return
    }
    for (
      let k = Math.floor(amount / coins[idx]);
      k >= 0 && k + count < ans;
      k--
    ) {
      shark(coins, amount - k * coins[idx], idx + 1, count + k)
    }
    return ans
  }
  shark(coins, amount, 0, 0, ans)
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans
}

console.log(coinChange([1, 2, 5], 11))

// 动态规划
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  // 初始化，总金额是0，那么就一个硬币都不能拿
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
}
console.log(coinChange([2], 3))

// 自顶向下递归+记忆化搜索
var coinChange = function (coins, amount) {
  const memo = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  coins = coins.sort((a, b) => a - b)

  var dfs = function (coins, amount, memo) {
    if (amount === 0) {
      return 0
    }

    if (memo[amount] !== Number.MAX_SAFE_INTEGER) {
      return memo[amount]
    }

    let res = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < coins.length; i++) {
      if (amount - coins[i] < 0) {
        break
      }
      let temp = dfs(coins, amount - coins[i], memo)
      if (temp === -1) {
        continue
      }
      res = Math.min(res, temp + 1)
    }

    memo[amount] = res === Number.MAX_SAFE_INTEGER ? -1 : res
    return memo[amount]
  }
  return dfs(coins, amount, memo)
}
console.log(coinChange([186, 419, 83, 408], 6249))

// 图，广度优先遍历
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0
  }
  const queue = [amount]
  const visted = new Array(amount + 1).fill(false)
  coins.sort((a, b) => a - b)

  let step = 0
  while (queue.length > 0) {
    console.log(queue)
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const temp = queue.shift()
      for (let j = 0; j < coins.length; j++) {
        let next = temp - coins[j]
        // 广度优先，第一个遇到0的路径就是最短路径
        if (next === 0) {
          return step + 1
        }
        if (next < 0) {
          break
        }
        if (!visted[next]) {
          queue.push(next)
          visted[next] = true
        }
      }
    }
    step++
  }
  return -1
}
console.log(coinChange([1, 2, 5], 11))
