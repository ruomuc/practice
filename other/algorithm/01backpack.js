// 这里用数组下标代表第几种物品，使用两个数组保存对应物品的重量和价值
var weight = [1, 2, 3]
var money = [6, 10, 12]

//背包容量
var target = 5

function backpack (w, v, target) {
  // 物品数量
  let n = w.length
  // 定义二维表
  var dp = new Array(n).fill(0).map(() => new Array(target + 1))

  // 初始化第一行
  for (let i = 0; i < target + 1; i++) {
    console.log(i, w[0])
    dp[0][i] = i >= w[0] ? v[0] : 0
  }

  // 根据第一行填充后面的数据
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < target + 1; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= w[i]) {
        dp[i][j] = Math.max(dp[i][j], v[i] + dp[i - 1][j - w[i]])
      }
    }
  }
  console.log(dp)
  return dp[n - 1][target]
}

console.log(backpack(weight, money, target))
